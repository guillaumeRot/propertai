// lib/email/sendThankYouEmail.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendFirstAnalyseEmail = async (toEmail: string) => {
  try {
    await resend.emails.send({
      from: "PropertAI <no-reply@propertai.fr>",
      to: toEmail,
      replyTo: "guillaume.rot@gmail.com",
      subject: "Que pensez-vous de votre première analyse avec PropertAI ?",
      html: `
        <p>Bonjour,</p>
        <p>Merci d’avoir utilisé <strong>PropertAI</strong> pour analyser votre première annonce immobilière ! 🙌</p>
        <p>J’espère que le rapport généré vous a été utile et vous a permis d’y voir plus clair sur la rentabilité du bien.</p>
        <p>Comme PropertAI est encore en phase d’amélioration, vos retours sont précieux pour nous aider à vous offrir l’outil le plus pertinent possible.</p>
        <p><strong>Auriez-vous 1 minute pour me dire ce que vous avez pensé de l’analyse ?</strong></p>
        <ul>
          <li>👉 Ce que vous avez aimé ?</li>
          <li>👉 Ce qu’il faudrait améliorer ?</li>
          <li>👉 Ce que vous aimeriez voir ajouté ?</li>
        </ul>
        <p>Il vous suffit de répondre à ce mail, même en quelques mots 🙂</p>
        <p>Merci d’avance pour votre aide,<br/>Guillaume — Fondateur de PropertAI</p>
      `,
    });
  } catch (error) {
    console.error("Erreur lors de l’envoi de l’email :", error);
  }
};
