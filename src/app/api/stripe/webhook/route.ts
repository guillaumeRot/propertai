export const dynamic = "force-dynamic";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import Stripe from "stripe";

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

async function notifyDiscordStripeEvent(
  email: string,
  type: string,
  plan?: string
) {
  const payload = {
    content: `📬 **Stripe : événement reçu**`,
    embeds: [
      {
        title: `💡 ${type.replace("customer.subscription.", "").toUpperCase()}`,
        color:
          type === "customer.subscription.deleted"
            ? 0xff0000
            : type === "customer.subscription.created"
              ? 0x00cc66
              : 0xff9900,
        fields: [
          {
            name: "Utilisateur",
            value: email,
            inline: true,
          },
          {
            name: "Plan",
            value: plan ?? "Inconnu",
            inline: true,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Webhook Stripe – PropertAI",
        },
      },
    ],
  };

  try {
    await fetch(process.env.DISCORD_STRIPE_WEBHOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("❌ Erreur envoi webhook Discord :", err);
  }
}

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature")!;
  if (!signature) {
    return new Response("Missing signature", { status: 400 });
  }

  let event;

  try {
    const textBody = await req.text();
    event = stripe.webhooks.constructEvent(textBody, signature, endpointSecret);
  } catch (err) {
    console.error("❌ Erreur webhook Stripe :", err);
    return new Response("Webhook signature verification failed", {
      status: 400,
    });
  }

  // 🔄 Handle subscription events
  if (
    event.type === "customer.subscription.created" ||
    event.type === "customer.subscription.updated"
  ) {
    const subscription = event.data.object as Stripe.Subscription;

    const customer = await stripe.customers.retrieve(
      subscription.customer as string
    );
    const email = (customer as Stripe.Customer).email;

    if (!email) {
      console.error("❌ Email introuvable pour le client Stripe.");
      return new Response("Missing email", { status: 400 });
    }

    // Trouve le plan via price ID
    const priceId = subscription.items.data[0].price.id;
    const currentPeriodEnd = new Date(
      subscription.items.data[0].current_period_end * 1000
    );
    const plan =
      priceId === process.env.STRIPE_PRICE_ID_ANNUAL ? "YEARLY" : "MONTHLY";

    await prisma.subscription.upsert({
      where: { userEmail: email },
      update: {
        plan,
        status: "ACTIVE",
        stripeSubscriptionId: subscription.id,
        currentPeriodEnd,
      },
      create: {
        userEmail: email,
        plan,
        status: "ACTIVE",
        stripeSubscriptionId: subscription.id,
        currentPeriodEnd,
        analysesUsed: 0,
      },
    });

    await notifyDiscordStripeEvent(email, event.type, plan);

    console.log(`✅ Abonnement ${plan} mis à jour pour ${email}`);
  }

  // ❌ Handle canceled subscriptions
  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;

    const customer = await stripe.customers.retrieve(
      subscription.customer as string
    );
    const email = (customer as Stripe.Customer).email;

    if (email) {
      await prisma.subscription.updateMany({
        where: { userEmail: email },
        data: {
          status: "CANCELED",
        },
      });

      await notifyDiscordStripeEvent(email, event.type, "–");

      console.log(`🚫 Abonnement annulé pour ${email}`);
    }
  }

  return new Response("OK", { status: 200 });
}
