import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Log the submission for debugging
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log("From IP:", clientIp);
    console.log("Name:", body.name);
    console.log("Email:", body.email);
    console.log("Company:", body.company || "N/A");
    console.log("Website:", body.website || "N/A");
    console.log("Message:", body.message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("===================================");

    // Send email notification via Resend
    try {
      const { error } = await resend.emails.send({
        from: "Contact Form <contact@brandtsystems.ca>",
        to: "gabby@brandtsystems.ca",
        replyTo: body.email,
        subject: `New Contact Form Submission: ${body.name}`,
        html: generateEmailTemplate({
          name: body.name,
          email: body.email,
          company: body.company,
          website: body.website,
          message: body.message,
        }),
      });

      if (error) {
        console.error("Resend error:", error);
        // Still return success to user - we logged the submission
        // You'll see the error in Vercel logs
      }
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Don't fail the request - the submission was valid
    }

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

// Helper function to generate email template
function generateEmailTemplate(data: {
  name: string;
  email: string;
  company?: string;
  website?: string;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 16px; }
        .label { font-weight: 600; color: #374151; }
        .value { margin-top: 4px; }
        .message-box { background: white; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          ${data.company ? `<div class="field"><div class="label">Company</div><div class="value">${data.company}</div></div>` : ""}
          ${data.website ? `<div class="field"><div class="label">Website</div><div class="value"><a href="${data.website}">${data.website}</a></div></div>` : ""}
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
