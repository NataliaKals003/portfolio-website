import nodemailer from "nodemailer";

const fromEmail = process.env.EMAIL_USER;

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Configuração do transporte com o Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromEmail, // Seu e-mail do Gmail
        pass: process.env.EMAIL_PASS, // Sua senha do Gmail ou senha de app
      },
    });

    // Configurações do e-mail
    const mailOptions = {
      from: email, // e-mail do remetente
      to: [fromEmail, email], // e-mail para onde será enviado
      subject: `Message from ${name}`, // Assunto do e-mail
      text: message, // Corpo do e-mail
    };

    // Envia o e-mail
    await transporter.sendMail(mailOptions);

    return new Response("Email sent successfully!", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("An error occurred. Please try again.", {
      status: 500,
    });
  }
}
