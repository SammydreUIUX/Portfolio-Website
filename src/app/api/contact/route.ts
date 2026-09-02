import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || !resend) {
      console.log('Contact form submission (Resend not configured):', {
        name,
        email,
        subject,
        message
      });
      
      return NextResponse.json(
        { message: 'Message received! (Email service not yet configured)' },
        { status: 200 }
      );
    }

    try {
      // Send email using Resend
      await resend!.emails.send({
        from: 'contact@samuelfunmilayo.space', // Replace with your domain
        to: 'contact@samuelfunmilayo.space',
        subject: `Portfolio Contact: ${subject}`,
        replyTo: email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #e30613; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #666;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="margin-top: 20px; padding: 10px; background: #f0f0f0; border-radius: 5px; font-size: 12px; color: #666;">
              This message was sent from your portfolio contact form.
            </div>
          </div>
        `,
      });

      return NextResponse.json(
        { message: 'Message sent successfully!' },
        { status: 200 }
      );

    } catch (resendError) {
      console.error('Resend error:', resendError);
      
      // Log the submission even if email fails
      console.log('Contact form submission (email failed):', {
        name,
        email,
        subject,
        message
      });
      
      return NextResponse.json(
        { error: 'Failed to send email, but your message was received' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}