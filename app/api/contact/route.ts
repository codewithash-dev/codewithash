import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_DRnaZZWr_7GC6ZzAjF5ZXU2DTqADmqHCe');

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@codewithash.com>',
      to: 'ashley@codewithash.com',
      replyTo: email,
      subject: `New Contact Form Message from ${email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}