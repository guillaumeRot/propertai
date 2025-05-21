import { sendThankYouEmail } from "@/lib/email/sendThankYouEmail";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Crée le user ou ignore si déjà inscrit
    const existing = await prisma.user.findUnique({ where: { email } });

    if (!existing) {
      const hashedPassword = await bcrypt.hash(password, 10);

      await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
          email,
          hashedPassword,
        },
      });
    }

    // Envoie un message sur Discord via ton webhook
    const webhookUrl = process.env.DISCORD_BETA_WEBHOOK!;
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `📬 Nouvelle inscription à la bêta : **${email}**`,
      }),
    });

    await sendThankYouEmail(email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
