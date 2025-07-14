// app/api/subscription/route.ts
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  const prisma = new PrismaClient();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sub = await prisma.subscription.findUnique({
    where: { userEmail: session.user.email },
  });

  if (!sub) {
    return NextResponse.json({ plan: "FREE", analysesUsed: 0 });
  }

  return NextResponse.json({
    plan: sub.plan,
    status: sub.status,
    currentPeriodEnd: sub.currentPeriodEnd,
    analysesUsed: sub.analysesUsed,
  });
}
