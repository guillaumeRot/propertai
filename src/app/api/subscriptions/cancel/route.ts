import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import Stripe from "stripe";

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

export async function DELETE() {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    // Récupérer l'abonnement de l'utilisateur
    const subscription = await prisma.subscription.findFirst({
      where: { 
        userEmail: session.user.email,
        status: 'ACTIVE' // On ne veut annuler que les abonnements actifs
      }
    });

    if (!subscription?.stripeSubscriptionId) {
      return NextResponse.json(
        { error: 'Aucun abonnement actif trouvé pour cet utilisateur' },
        { status: 400 }
      );
    }

    // Annuler l'abonnement chez Stripe
    await stripe.subscriptions.cancel(subscription.stripeSubscriptionId);

    // Mettre à jour la base de données
    await prisma.subscription.update({
      where: { id: subscription.id },
      data: {
        status: 'CANCELED',
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'annulation de l\'abonnement:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'annulation de l\'abonnement' },
      { status: 500 }
    );
  }
}
