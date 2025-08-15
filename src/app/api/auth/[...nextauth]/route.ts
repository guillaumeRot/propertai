import { sendThankYouEmail } from "@/lib/email/sendThankYouEmail";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // ou "database" si tu veux stocker en BDD
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Email et mot de passe",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.hashedPassword) return null;

        const isValid = await bcrypt.compare(password, user.hashedPassword);
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // page personnalisée
    error: "/auth/login", // peut-être améliorer avec ?error=
  },
  secret: process.env.NEXTAUTH_SECRET,

  // 📌 Création auto de la subscription à la 1ère connexion
  events: {
    async createUser(message) {
      if (!message.user.email) return; // sécurité

      await prisma.subscription.create({
        data: {
          userEmail: message.user.email,
          plan: "FREE", // valeur par défaut de ton enum Plan
          status: "ACTIVE", // valeur par défaut de ton enum SubscriptionStatus
          analysesUsed: 0,
        },
      });

      sendThankYouEmail(message.user.email);

      // Envoie un message sur Discord via ton webhook
      const webhookUrl = process.env.DISCORD_NEW_USER_WEBHOOK!;
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `🎉 Nouveau membre sur PropertAI !\n👤 **${message.user.name}** (${message.user.email}) vient de créer un compte.`,
        }),
      });
    },
  },
};

const handler = NextAuth(authOptions);
export const GET = handler;
export const POST = handler;
