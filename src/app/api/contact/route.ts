import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const discordWebhookUrl = process.env.DISCORD_CONTACT_WEBHOOK!;

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    // Envoi email avec Resend
    await resend.emails.send({
      from: "contact@propertai.fr",
      to: "guillaume.rot@gmail.com",
      subject: `📬 Nouveau message de contact`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    // Envoi Discord
    await fetch(discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `📩 Nouveau message de contact`,
        embeds: [
          {
            title: "Message reçu depuis le formulaire de contact",
            color: 5814783,
            fields: [
              { name: "Nom", value: name, inline: true },
              { name: "Email", value: email, inline: true },
              { name: "Message", value: message },
            ],
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
