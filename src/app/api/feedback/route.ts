import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import fetch from "node-fetch";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_FEEDBACK_WEBHOOK!;
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { analyseId, designRating, dataRating, recommendation, remarks } =
      body;

    // 1. Sauvegarde en base
    const avis = await prisma.avis.create({
      data: {
        analyseId,
        design: designRating,
        data: dataRating,
        recommendation,
        remarks,
      },
    });

    // 2. Envoi vers Discord
    await fetch(process.env.DISCORD_AVIS_WEBHOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `📝 Nouvel avis reçu :  
- Analyse ID: ${analyseId}  
- Design: ${designRating}/5  
- Données: ${dataRating}/5  
- Recommandation: ${recommendation}  
- Remarques: ${remarks || "Aucune"}`,
      }),
    });

    return NextResponse.json({ success: true, avis });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'avis" },
      { status: 500 }
    );
  }
}
