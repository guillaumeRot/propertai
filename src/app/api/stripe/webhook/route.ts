import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import Stripe from "stripe";

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature")!;
  const rawBody = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
  } catch (err) {
    console.error("❌ Erreur webhook Stripe :", err);
    return new Response("Invalid signature", { status: 400 });
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
      priceId === process.env.STRIPE_PRICE_ANNUEL_ID ? "YEARLY" : "MONTHLY";

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

      console.log(`🚫 Abonnement annulé pour ${email}`);
    }
  }

  return new Response("OK", { status: 200 });
}
