// lib/email/sendThankYouEmail.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendCreateSubscriptionEmail = async (toEmail: string) => {
  try {
    await resend.emails.send({
      from: "PropertAI <no-reply@propertai.fr>",
      to: toEmail,
      replyTo: "guillaume.rot@gmail.com",
      subject: "Merci pour votre abonnement à PropertAI !",
      html: `
        <p>Bonjour,</p>
        <p>Un grand merci pour votre abonnement à PropertAI ! 🎉</p>
        <p>Votre accès premium est désormais actif. Vous pouvez dès maintenant profiter de toutes les fonctionnalités avancées de notre plateforme :</p>
        <ul>
          <li>Analyses illimitées de biens immobiliers</li>
          <li>Historique complet de vos recherches</li>
        </ul>
        <p>Si vous avez des questions ou avez besoin d'aide, n'hésitez pas à répondre à cet email.</p>
        <p>Bonne analyse !<br>L'équipe PropertAI</p>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">
          Vous recevez cet email car vous avez souscrit à un abonnement PropertAI.
        </p>
      `,
    });
  } catch (error) {
    console.error("Erreur lors de l’envoi de l’email :", error);
  }
};

export const sendDeleteSubscriptionEmail = async (toEmail: string) => {
  try {
    await resend.emails.send({
      from: "PropertAI <no-reply@propertai.fr>",
      to: toEmail,
      replyTo: "guillaume.rot@gmail.com",
      subject: "Votre abonnement PropertAI a été annulé",
      html: `
        <p>Bonjour,</p>
        <p>Nous confirmons l'annulation de votre abonnement PropertAI.</p>
        <p>Nous sommes désolés de vous voir partir. Pour nous aider à améliorer nos services, pourriez-vous nous indiquer la raison de votre départ ?</p>
        <p>Vos retours sont précieux pour nous. N'hésitez pas à nous faire part de vos commentaires en répondant simplement à cet email.</p>
        <p>Votre compte restera actif jusqu'à la fin de votre période de facturation en cours.</p>
        <p>Nous espérons vous revoir bientôt sur PropertAI.</p>
        
        <p>Cordialement,<br>L'équipe PropertAI</p>
        
        <p style="font-size: 12px; color: #666; margin-top: 20px;">
          Vous recevez cet email car vous avez annulé votre abonnement PropertAI.
        </p>
      `,
    });
  } catch (error) {
    console.error("Erreur lors de l’envoi de l’email :", error);
  }
};
