// lib/email/sendThankYouEmail.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendThankYouEmail = async (toEmail: string) => {
  try {
    await resend.emails.send({
      from: "PropertAI <no-reply@propertai.fr>",
      to: toEmail,
      subject: "Bienvenue sur la bêta de PropertAI 🚀",
      html: `
        <p>Bonjour,</p>
        <p>Merci de vous être inscrit à la version bêta de <strong>PropertAI</strong> ! 🎉</p>
        <p>Vous faites désormais partie des premiers testeurs de notre assistant d’analyse immobilière.</p>
        <p>Vous pouvez maintenant vous connecter à votre compte.</p>
        <p>À très vite,<br>L’équipe PropertAI</p>
      `,
    });
  } catch (error) {
    console.error("Erreur lors de l’envoi de l’email :", error);
  }
};
