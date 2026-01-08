// lib/email/sendThankYouEmail.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendThankYouEmail = async (toEmail: string) => {
  try {
    await resend.emails.send({
      from: "PropertAI <no-reply@propertai.fr>",
      to: toEmail,
      replyTo: "guillaume.rot@gmail.com",
      subject: "Bienvenue sur PropertAI 🎉",
      html: `
        <p>Bonjour,</p>
        <p>Merci de vous être inscrit à <strong>PropertAI</strong> ! 🚀</p>
        <p>Votre compte gratuit est désormais actif, vous pouvez dès maintenant profiter de notre assistant d’analyse immobilière.</p>
        <p>Connectez-vous dès aujourd’hui et commencez à analyser vos annonces.</p>
        <p>À très vite,<br>L’équipe PropertAI</p>
      `,
    });
  } catch (error) {
    console.error("Erreur lors de l’envoi de l’email :", error);
  }
};
