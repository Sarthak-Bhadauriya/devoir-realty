import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, email, project, budget, message } = data;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    // Build WhatsApp redirect URL
    const waMessage = encodeURIComponent(
      `Hi Devoir Realty, I have submitted an inquiry for ${project || 'a luxury property'}. My name is ${name} and my phone is ${phone}.`
    );
    const waUrl = `https://wa.me/916283242916?text=${waMessage}`;

    // Send Email (only when SMTP credentials are configured)
    if (process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER || 'leads@devoirrealty.com',
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Devoir Realty Web Leads" <${process.env.SMTP_USER || 'leads@devoirrealty.com'}>`,
        to: 'info@devoirrealty.com',
        subject: `🚨 NEW VIP LEAD: ${name} — ${project || 'General Inquiry'}`,
        html: `
          <div style="font-family: 'Georgia', serif; background-color: #09090b; color: #f5f2ed; padding: 48px; max-width: 600px; margin: 0 auto;">
            <div style="border-bottom: 1px solid #c9a96e; padding-bottom: 20px; margin-bottom: 32px;">
              <h1 style="color: #c9a96e; font-size: 24px; font-weight: 400; letter-spacing: 0.1em; margin: 0;">
                DEVOIR REALTY
              </h1>
              <p style="color: #9a958a; font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; margin-top: 4px;">
                New Consultation Request
              </p>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15); color: #9a958a; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; width: 40%;">Client Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15); color: #f5f2ed; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15); color: #9a958a; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Phone Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15);"><a href="tel:${phone}" style="color: #c9a96e; font-size: 15px; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15); color: #9a958a; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Email Address</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15); color: #f5f2ed; font-size: 15px;">${email || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15); color: #9a958a; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Target Property</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15); color: #c9a96e; font-size: 15px; font-weight: 500;">${project || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15); color: #9a958a; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Budget Range</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.15); color: #f5f2ed; font-size: 15px;">${budget || '—'}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; color: #9a958a; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; vertical-align: top; padding-top: 16px;">Notes</td>
                <td style="padding: 12px 0 0; color: #9a958a; font-size: 14px; font-weight: 300; line-height: 1.7;">${message}</td>
              </tr>` : ''}
            </table>

            <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(201,169,110,0.15);">
              <a href="${waUrl}" style="display: inline-block; background: #25D366; color: #fff; padding: 12px 24px; text-decoration: none; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; font-family: sans-serif;">
                Open WhatsApp Conversation →
              </a>
            </div>

            <p style="margin-top: 32px; font-size: 11px; color: rgba(154,149,138,0.5); letter-spacing: 0.05em;">
              Source: Devoir Realty Ultra-Premium Web Portal · devoirrealty.com
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry registered successfully. An executive will contact you shortly.',
        whatsappUrl: waUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
