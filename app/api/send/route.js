import nodemailer from "nodemailer";

const fromEmail = process.env.EMAIL_USER;

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromEmail,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: [fromEmail, email],
      subject: `Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response("Email sent successfully!", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("An error occurred. Please try again.", {
      status: 500,
    });
  }
}
