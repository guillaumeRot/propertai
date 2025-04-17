// pages/api/analyse.ts
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { description } = await req.json();

  const prompt = `
Tu es un expert en investissement immobilier locatif. À partir d'une description d'annonce immobilière, tu dois retourner une analyse complète au format JSON strictement valide.

Voici les informations que tu dois renvoyer :
- rentabilite : string (ex: "7.8%")
- loyer : { estimation: string, explication: string }
- fiscalite : { regime: string, explication: string }
- recommandations : string[]
- forces : string[]
- faiblesses : string[]
- questions : string[]
- strategie : string
- estimationBien : {
    estimation: string,
    prixAffiche: string,
    prixM2Quartier: string,
    commentaire: string,
    positionnement: string // valeurs possibles : 'bonne_affaire', 'negociable', 'surcote'
  }
- tensionLocative : {
    estZoneTendue: boolean,
    commentaire: string,
    infoReglementaire: string
  }

Voici la description de l'annonce à analyser :
"""${description}"""

Retourne uniquement un objet JSON valide avec ces propriétés.
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  const raw = completion.choices[0].message.content;
  const result = JSON.parse(raw!); // Assure-toi que le format soit propre

  return NextResponse.json({ result });
}
