import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    const htmlContent = `
      <h1>${subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>${message}</p>
    `;

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["nataliakals03@gmail.com", email],
      subject: subject,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
