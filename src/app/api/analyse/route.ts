import { sendFirstAnalyseEmail } from "@/lib/email/sendFirstAnalyseEmail";
import { PrismaClient } from "@prisma/client"; // adapte ce chemin si besoin
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const prisma = new PrismaClient();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function sendDiscordNotification({
  userEmail,
  ville,
  result,
}: {
  userEmail: string;
  ville: string;
  result: any;
}) {
  const webhookUrl = process.env.DISCORD_ANALYSE_WEBHOOK;
  if (!webhookUrl) return;

  const content = `📊 Nouvelle analyse immobilière effectuée pour la commune de **${ville}** par **${userEmail}**`;

  const embed = {
    title: "Analyse lancée",
    color: 3447003, // bleu
    fields: [
      {
        name: "Commune",
        value: ville,
        inline: true,
      },
      {
        name: "Rentabilité estimée",
        value: result.rentabilite,
        inline: true,
      },
      {
        name: "Loyer estimé",
        value: result.loyer.estimation,
        inline: true,
      },
    ],
    footer: {
      text: "PropertAI – Analyse automatisée",
    },
    timestamp: new Date().toISOString(),
  };

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        embeds: [embed],
      }),
    });
  } catch (err) {
    console.error("❌ Erreur Discord webhook :", err);
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { description } = await req.json();

  if (!description) {
    return NextResponse.json(
      { error: "Description manquante" },
      { status: 400 }
    );
  }

  let ville = null;

  const extractionPrompt = `
À partir de cette description immobilière, renvoie uniquement le **nom de la commune** sans aucun texte autour.

"""${description}"""
  `;

  const extraction = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    temperature: 0,
    messages: [{ role: "user", content: extractionPrompt }],
  });

  const rawVille = extraction.choices[0].message.content?.trim();
  console.log("🏙️ Ville extraite :", rawVille);

  if (rawVille) {
    ville = await prisma.villeIndicateur.findFirst({
      where: {
        nom_commune: {
          equals: rawVille,
          mode: "insensitive",
        },
      },
    });
  }

  if (!ville) {
    return NextResponse.json(
      { error: "Commune introuvable en base" },
      { status: 404 }
    );
  }

  console.log("✅ Commune trouvée :", ville.nom_commune);

  // Prépare les données locales pour le prompt
  const estZoneTendue = ["A", "A bis", "B1"].includes(ville.type_zone ?? "");

  const dataLocal = {
    prixM2AchatMaison: ville.prix_m2_achat_maison ?? "inconnu",
    prixM2AchatAppartement: ville.prix_m2_achat_appartement ?? "inconnu",
    loyerM2Maison: ville.loyer_m2_maison ?? "inconnu",
    loyerM2AppartPetit: ville.loyer_m2_appart_petit ?? "inconnu",
    loyerM2AppartGrand: ville.loyer_m2_appart_grand ?? "inconnu",
    tauxVacance: ville.taux_vacance ?? "inconnu",
    partLocataires: ville.part_locataires ?? "inconnu",
    nbLogements: ville.nb_logements ?? "inconnu",
    nbLogementsVacants: ville.nb_logements_vacants ?? "inconnu",
    nbResidencesPrincipales: ville.nb_residences_principales ?? "inconnu",
    nbResidencesSecondaires: ville.nb_residences_secondaires ?? "inconnu",
    partDiplomesSuperieur: ville.part_diplomes_supp ?? "inconnu",
    partLogesGratuit: ville.part_loges_gratuitement ?? "inconnu",
    partMenages1P: ville.part_menages_1_personne ?? "inconnu",
    partMenages5P: ville.part_menages_5_personnes ?? "inconnu",
    partMobiliteRecent: ville.part_mobilite_recent ?? "inconnu",
    population: ville.population ?? "inconnu",
    zoneTendue: estZoneTendue ? "Oui" : "Non",
  };

  // 3️⃣ Créer le prompt final d'analyse enrichi
  const promptAnalyse = `
Tu es un expert en investissement immobilier. Ton rôle est d’analyser une description de bien immobilier pour en déduire :

- Sa rentabilité brute estimée
- La meilleure stratégie d'exploitation
- Les forces et faiblesses du bien
- Les questions clés à poser
- La tension locative et les risques éventuels

Voici les **données locales fiables** pour la commune "${ville.nom_commune}" :

- Prix moyen achat maison : ${dataLocal.prixM2AchatMaison} €/m²
- Prix moyen achat appartement : ${dataLocal.prixM2AchatAppartement} €/m²
- Loyer moyen maison : ${dataLocal.loyerM2Maison} €/m²
- Loyer moyen petit appartement : ${dataLocal.loyerM2AppartPetit} €/m²
- Loyer moyen grand appartement : ${dataLocal.loyerM2AppartGrand} €/m²
- Taux de vacance locative : ${dataLocal.tauxVacance}
- Part des locataires : ${dataLocal.partLocataires}
- Population totale : ${dataLocal.population}
- Nombre de logements : ${dataLocal.nbLogements}
- Nombre de logements vacants : ${dataLocal.nbLogementsVacants}
- Nombre de résidences principales : ${dataLocal.nbResidencesPrincipales}
- Nombre de résidences secondaires : ${dataLocal.nbResidencesSecondaires}
- Part des diplômés supérieurs : ${dataLocal.partDiplomesSuperieur}
- Part des personnes logées gratuitement : ${dataLocal.partLogesGratuit}
- Part des ménages 1 personne : ${dataLocal.partMenages1P}
- Part des ménages 5 personnes ou plus : ${dataLocal.partMenages5P}
- Part de mobilité récente (<2 ans) : ${dataLocal.partMobiliteRecent}
- Zone tendue : ${dataLocal.zoneTendue}

⚠️ Utilise strictement les données locales fournies ci-dessus sans les modifier ni les ajuster, sauf si elles sont explicitement inconnues.
⚠️ Si une ou plusieurs données locales sont "inconnues", fais la meilleure estimation possible basée sur la description du bien et ta connaissance générale du marché immobilier.

---

Voici la **description** du bien à analyser :

"""${description}"""

---

✅ Ton analyse doit respecter **strictement** le format JSON suivant, sans texte autour :

{
  "rentabilite": "string (ex: '6.3%')",
  "loyer": {
    "estimation": "string (multiplie le loyer moyen de maison, petit ou grand appartement selon le type du bien, par la surface de l'appartement. Si le contexte de l'annonce est important dans cette estimation, alors décris le dans l'explication. exemple: '750 €/mois')",
    "explication": "string"
  },
  "fiscalite": {
    "regime": "string (En LMNP, on ne peut plus amortir les biens, si il y a des travaux conseilles plutôt une SCI IS, sinon le micro-foncier, exemple: 'LMNP réel', 'Micro-foncier', 'SCI IS')",
    "explication": "string"
  },
  "recommandations": [
    "string", "string", ...
  ],
  "forces": [
    "string", "string", ...
  ],
  "faiblesses": [
    "string", "string", ...
  ],
  "questions": [
    "string", "string", ...
  ],
  "strategie": "string",
  "estimationBien": {
    "estimation": "string (multiplie le prix moyen d'achat du type du bien par la surface, exemple: '198 000 €')",
    "prixAffiche": "string (ex: '215 000 €')",
    "prixM2Quartier": "string (le prix moyen achat de maison ou appartemment selon le type du bien, exemple: '3 800 €/m²')",
    "commentaire": "string",
    "positionnement": "string ('bonne_affaire', 'negociable', 'surcote')"
  },
  "tensionLocative": {
    "estZoneTendue": boolean,
    "commentaire": "string",
    "infoReglementaire": "string"
  }
}

---

🔵 Instruction supplémentaire :
- Dans le champ "loyer.explication", indique précisément le détail du calcul".
`;

  // console.log("Prompt :", promptAnalyse);

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    temperature: 0.2,
    messages: [{ role: "user", content: promptAnalyse }],
  });

  const raw = completion.choices[0].message.content;
  // console.log("🧠 Analyse enrichie :", raw);

  const result = JSON.parse(raw!);

  const analyseExists = await prisma.analyse.findFirst({
    where: {
      userEmail: session.user.email,
    },
  });

  if (!analyseExists) {
    sendFirstAnalyseEmail(session.user.email);
  }

  const newAnalyse = await prisma.analyse.create({
    data: {
      userEmail: session.user.email,
      description,
      rentabilite: result.rentabilite,
      loyerEstimation: result.loyer.estimation,
      loyerExplication: result.loyer.explication,
      fiscaliteRegime: result.fiscalite.regime,
      fiscaliteExplication: result.fiscalite.explication,
      recommandations: result.recommandations,
      forces: result.forces,
      faiblesses: result.faiblesses,
      questions: result.questions,
      strategie: result.strategie,
      estimation: result.estimationBien.estimation,
      prixAffiche: result.estimationBien.prixAffiche,
      prixM2Quartier: result.estimationBien.prixM2Quartier,
      commentaireEstimation: result.estimationBien.commentaire,
      positionnement: result.estimationBien.positionnement,
      estZoneTendue: result.tensionLocative.estZoneTendue,
      commentaireZoneTendue: result.tensionLocative.commentaire,
      infoReglementaire: result.tensionLocative.infoReglementaire,
    },
  });

  result.analyseId = newAnalyse.id;

  await prisma.subscription.update({
    where: { userEmail: session.user.email },
    data: { analysesUsed: { increment: 1 } },
  });

  await sendDiscordNotification({
    userEmail: session.user.email,
    ville: ville.nom_commune,
    result,
  });

  return NextResponse.json({ result });
}
