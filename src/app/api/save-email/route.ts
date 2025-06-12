export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, firstName } = body;

  if (!email || !firstName)
    return NextResponse.json({ error: "Champs requis" }, { status: 400 });

  try {
    await prisma.lead.create({
      data: {
        email,
        firstName,
      },
    });

    // Envoie un message sur Discord via ton webhook
    const webhookUrl = process.env.DISCORD_LEAD_WEBHOOK!;
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `🎉 **Nouveau lead PropertAI**\n\n👤 Prénom : **${firstName}**\n📧 Email : **${email}**.`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
