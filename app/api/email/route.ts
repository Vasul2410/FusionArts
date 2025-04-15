import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message }: { name: string; email: string; message: string } = await req.json();
    console.log("Received:", name, email, message);

    // Validate the fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const recipients = [
      'vasulimbachiya1@gmail.com',
      'harshpatelofficial5@gmail.com',
      'patelpravin2770@gmail.com'
    ];

    // Create Nodemailer transport using Gmail and App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER!, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD!, // Your Gmail App Password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: recipients.join(','),
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully to all recipients',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: `Failed to send email: ${error}` },
      { status: 500 }
    );
  }
}
