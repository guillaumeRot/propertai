// pages/api/analyse.ts
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { description } = await req.json();

  const prompt = `
Tu es un expert en investissement immobilier locatif. Ton rôle est d’analyser une description de bien immobilier pour en déduire ses caractéristiques clés, sa stratégie optimale, et sa rentabilité potentielle. Tu réponds toujours sous forme d’un objet JSON strictement valide, sans aucun texte autour.

Voici la structure JSON à respecter :

{
  "rentabilite": string,
  "loyer": {
    "estimation": string,
    "explication": string
  },
  "fiscalite": {
    "regime": string,
    "explication": string
  },
  "recommandations": string[],
  "forces": string[],
  "faiblesses": string[],
  "questions": string[],
  "strategie": string,
  "estimationBien": {
    "estimation": string,
    "prixAffiche": string,
    "prixM2Quartier": string,
    "commentaire": string,
    "positionnement": string // valeurs possibles : 'bonne_affaire', 'negociable', 'surcote'
  },
  "tensionLocative": {
    "estZoneTendue": boolean,
    "commentaire": string,
    "infoReglementaire": string
  }
}

---

Voici un exemple de description analysée et la réponse attendue :

📄 Description :
"Appartement T2 de 45 m² situé à Toulouse centre, à 3 min du métro, au 2e étage sans ascenseur, dans une petite copropriété bien entretenue. Chauffage individuel électrique, cuisine ouverte, salle de bain rénovée. Loyer estimé 750 €. Prix affiché 215 000 €."

✅ Résultat attendu :

{
  "rentabilite": "6.3%",
  "loyer": {
    "estimation": "750 €/mois",
    "explication": "Loyer basé sur les prix moyens observés pour des T2 similaires dans le centre de Toulouse."
  },
  "fiscalite": {
    "regime": "LMNP réel",
    "explication": "Permet de déduire les charges et d’amortir le bien pour réduire l’imposition."
  },
  "recommandations": [
    "Prévoir un ameublement complet pour location meublée.",
    "Optimiser les charges de copropriété pour améliorer la rentabilité nette."
  ],
  "forces": [
    "Très bonne localisation",
    "Proche métro et commodités",
    "Bien rénové récemment"
  ],
  "faiblesses": [
    "Étage sans ascenseur",
    "Chauffage électrique (moins performant)"
  ],
  "questions": [
    "Quel est le montant des charges de copropriété ?",
    "Le bien est-il déjà loué ?",
    "DPE à jour ? Classe énergétique ?",
    "Travaux prévus dans la copropriété ?"
  ],
  "strategie": "Mise en location meublée en LMNP réel pour bénéficier d’un bon rendement et d’une fiscalité allégée.",
  "estimationBien": {
    "estimation": "198 000 €",
    "prixAffiche": "215 000 €",
    "prixM2Quartier": "3 800 €/m²",
    "commentaire": "Le prix affiché est légèrement supérieur au marché. Une négociation de 7–10% semble raisonnable.",
    "positionnement": "negociable"
  },
  "tensionLocative": {
    "estZoneTendue": true,
    "commentaire": "Le bien est en zone tendue : forte demande locative, rotation rapide.",
    "infoReglementaire": "Encadrement des loyers, préavis réduit, taxe sur logements vacants."
  }
}

---

Analyse maintenant cette nouvelle description :

"""${description}"""

Retourne **uniquement** un objet JSON **strictement valide** selon la structure ci-dessus. Aucun texte autour. Aucune explication.
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    temperature: 0.2,
    messages: [{ role: "user", content: prompt }],
    // response_format: "json", // disponible avec gpt-3.5-1106
  });

  console.log("TEST GUI completion :", completion);
  const raw = completion.choices[0].message.content;
  console.log("TEST GUI raw :", raw);
  const result = JSON.parse(raw!); // Assure-toi que le format soit propre
  // const result = {
  //   rentabilite: "7.8%",
  //   loyer: {
  //     estimation: "1 100 €/mois",
  //     explication: "Loyer estimé selon la surface et les loyers moyens.",
  //   },
  //   explicationLoyer:
  //     "Estimé selon la surface et les loyers moyens du quartier.",
  //   fiscalite: {
  //     regime: "LMNP réel",
  //     explication:
  //       "Permet de déduire les charges et amortissements du revenu imposable.",
  //   },
  //   explicationFiscalite:
  //     "Permet d’amortir le bien et de réduire fortement l’imposition sur les revenus locatifs.",
  //   recommandations: [
  //     "Diviser le bien en 2 lots pour augmenter le rendement.",
  //     "Passer en colocation meublée pour optimiser la fiscalité.",
  //   ],
  //   forces: ["Emplacement central", "Proche des transports"],
  //   faiblesses: [
  //     "Copropriété vieillissante avec parties communes à rafraîchir",
  //     "Électricité à remettre aux normes (tableau, prises, disjoncteurs)",
  //     "Isolation thermique insuffisante (fenêtres simple vitrage, murs non isolés)",
  //     "Travaux de rafraîchissement intérieur : peinture, sols, cuisine et salle de bain à moderniser",
  //     "Toiture ancienne : à contrôler lors du diagnostic technique global (DTG)",
  //   ],
  //   questions: [
  //     "Y a-t-il une cave ou des combles exploitables ?",
  //     "Le bien est-il conforme aux normes électriques ?",
  //     "L’installation de gaz a-t-elle moins de 15 ans ou a-t-elle été contrôlée récemment ?",
  //     "Le DPE est-il supérieur à F (passoires énergétiques bientôt interdites à la location) ?",
  //     "Le système de ventilation est-il adapté (notamment pour la colocation) ?",
  //     "Le logement respecte-t-il la surface minimale pour la location (9 m² et 2,2 m de hauteur) ?",
  //     "Présence de plomb ou d’amiante dans les diagnostics obligatoires ?",
  //     "L’immeuble prévoit-il des travaux dans les 3 prochaines années (ravalement, toiture, etc.) ?",
  //   ],
  //   strategie:
  //     "Stratégie de colocation meublée en LMNP réel pour optimiser les revenus nets et la fiscalité.",
  //   estimationBien: {
  //     estimation: "198 000 €",
  //     prixAffiche: "215 000 €",
  //     prixM2Quartier: "3 800 €/m²",
  //     commentaire:
  //       "Le bien est affiché au-dessus du prix moyen local. Une négociation autour de 7 à 10% semble raisonnable.",
  //     positionnement: "negociable", // valeurs possibles : 'bonne_affaire', 'negociable', 'surcote'
  //   },
  //   tensionLocative: {
  //     estZoneTendue: true,
  //     commentaire:
  //       "Le bien est situé dans une zone tendue : la demande locative est forte, ce qui limite le risque de vacance.",
  //     infoReglementaire:
  //       "Encadrement des loyers, préavis réduit à 1 mois pour les locataires, taxe sur les logements vacants.",
  //   },
  // };

  return NextResponse.json({ result });
}
