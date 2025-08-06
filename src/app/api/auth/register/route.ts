import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  console.log("Inscription");
  try {
    const { email, password, firstName } = await req.json();

    if (!email || !password || !firstName) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // Vérifie si un utilisateur existe déjà avec cet email
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé." },
        { status: 409 }
      );
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création du User
    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        hashedPassword,
      },
    });

    // Création du compte lié (account de type "form")
    await prisma.account.create({
      data: {
        userId: newUser.id,
        type: "credentials",
        provider: "form",
        providerAccountId: email,
      },
    });

    await prisma.subscription.create({
      data: {
        userEmail: email,
        plan: "FREE",
        status: "ACTIVE",
        analysesUsed: 0,
      },
    });

    // Envoie un message sur Discord via ton webhook
    const webhookUrl = process.env.DISCORD_NEW_USER_WEBHOOK!;
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `🎉 Nouveau membre sur PropertAI !\n👤 **${firstName}** (${email}) vient de créer un compte.`,
      }),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de l'inscription." },
      { status: 500 }
    );
  }
}
