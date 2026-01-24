import { NextRequest, NextResponse } from "next/server";

// Simple validation helper
function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
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
    //   to: "hello@brandtsystems.ca",
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
function generateEmailTemplate(data: any): string {
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
