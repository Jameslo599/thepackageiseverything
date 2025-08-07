'use server';
import nodemailer from 'nodemailer';
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, dialcode, phone, firstName, lastName, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: SMTP_SERVER_HOST,
      port: 465,
      secure: true,
      auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD
      }
    });

    const mailOptions = {
      from: email,
      to: SITE_MAIL_RECEIVER,
      subject: `Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${dialcode} ${phone}
        Message: ${message}
      `,
      html: ''
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully.' }), {
      status: 200
    });
  } catch (error) {
    console.error('[Mail Error]', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email.' }), {
      status: 500
    });
  }
}
// `<h1>New Form Submission</h1>
//         <h2>Dialcode: ${formValues.dialcode}</h2>
//         <h2>Email: ${formValues.email}</h2>
//         <h2>First Name: ${formValues.firstName}</h2>
//         <h2>Last Name: ${formValues.lastName}</h2>
//         <h2>Phone Number: ${formValues.phone}</h2>
//         <h2>Message: ${formValues.message}</h2>`;
