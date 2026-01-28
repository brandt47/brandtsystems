import { NextRequest, NextResponse } from "next/server";

// Rate limiting store (in production, use Redis or a proper database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 submissions per hour per IP

// Simple validation helper
function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Rate limiting helper
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const rateLimitData = rateLimitMap.get(ip);

  // Clean up old entries
  if (rateLimitData && now > rateLimitData.resetTime) {
    rateLimitMap.delete(ip);
  }

  const currentData = rateLimitMap.get(ip);

  if (!currentData) {
    // First request from this IP
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true };
  }

  if (currentData.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    return { allowed: false, resetTime: currentData.resetTime };
  }

  // Increment count
  currentData.count += 1;
  rateLimitMap.set(ip, currentData);
  return { allowed: true };
}

// Get client IP address
function getClientIp(request: NextRequest): string {
  // Try various headers that might contain the real IP
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip");

  if (cfConnectingIp) return cfConnectingIp;
  if (realIp) return realIp;
  if (forwarded) return forwarded.split(",")[0].trim();

  return "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. HONEYPOT CHECK - If filled, it's a bot
    if (body.honeypot && body.honeypot.trim() !== "") {
      console.log("🤖 Bot detected via honeypot:", body.honeypot);
      // Return success to fool the bot, but don't process
      return NextResponse.json(
        {
          success: true,
          message: "Thank you! I'll get back to you within 24 hours.",
        },
        { status: 200 }
      );
    }

    // 2. RATE LIMITING - Check IP address
    const clientIp = getClientIp(request);
    const rateLimitCheck = checkRateLimit(clientIp);

    if (!rateLimitCheck.allowed) {
      const minutesUntilReset = Math.ceil(
        (rateLimitCheck.resetTime! - Date.now()) / 60000
      );

      console.log(`🚫 Rate limit exceeded for IP: ${clientIp}`);
      return NextResponse.json(
        {
          error: `Too many submissions. Please try again in ${minutesUntilReset} minutes.`,
        },
        { status: 429 }
      );
    }

    // 3. Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd send this to your email service, CRM, etc.)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log("From IP:", clientIp);
    console.log("Name:", body.name);
    console.log("Email:", body.email);
    console.log("Company:", body.company || "N/A");
    console.log("Website:", body.website || "N/A");
    console.log("Message:", body.message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("===================================");

    // TODO: In production, integrate with:
    // - Email service (SendGrid, Resend, Mailgun, etc.)
    // - CRM (HubSpot, Notion, Airtable, etc.)
    // - Slack/Discord notifications
    //
    // Example with a hypothetical email service:
    // await emailService.send({
    //   to: "gabby@brandtsystems.ca",
    //   subject: `New Contact Form: ${body.name}`,
    //   html: generateEmailTemplate(body),
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! I'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// Helper function to generate email template (optional)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _generateEmailTemplate(data: { name: string; email: string; company?: string; website?: string; message: string }): string {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
    ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `;
}
