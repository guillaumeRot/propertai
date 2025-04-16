"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function AnalysePage() {
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyse = async () => {
    setLoading(true);
    setResult(null);

    // Simulation d'une réponse d'API
    setTimeout(() => {
      setResult({
        rentabilite: "7.8%",
        loyer: {
          estimation: "950€/mois",
          explication:
            "Basé sur des biens similaires dans le même quartier sur les 6 derniers mois.",
        },
        fiscalite: {
          regime: "LMNP réel",
          explication:
            "Permet d’amortir le bien et d’optimiser la fiscalité si vous meublez le logement.",
        },
        recommandations: [
          "Diviser le bien en 2 lots pour augmenter le rendement.",
          "Passer en colocation meublée pour optimiser la fiscalité.",
        ],
        forces: ["Emplacement central", "Proche des transports"],
        faiblesses: [
          "RDC peu lumineux",
          "Petite surface difficilement modulable",
        ],
        strategie:
          "Viser la colocation meublée pour jeunes actifs avec un bail mobilité afin de maximiser les loyers tout en conservant une flexibilité.",
        questions: ["Y a-t-il une cave ou des combles exploitables ?"],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 mt-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Analysez votre bien en un instant
        </h1>

        <textarea
          placeholder="Collez ici la description du bien immobilier..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={8}
          className="w-full border border-gray-300 rounded-md p-4 mb-4 shadow-sm"
        />

        <button
          onClick={handleAnalyse}
          disabled={!description || loading}
          className="w-full py-3 text-lg font-semibold bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 disabled:bg-gray-400 transition-colors"
        >
          {loading ? "Analyse en cours..." : "Lancer l'analyse"}
        </button>

        {result && (
          <div className="mt-10 bg-white rounded-xl shadow p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Résultats de l'analyse
            </h2>

            <div>
              <p className="text-lg font-medium text-gray-700">
                Rentabilité estimée :
              </p>
              <p className="text-blue-600 text-xl font-bold">
                {result.rentabilite}
              </p>
            </div>

            <div>
              <p className="text-lg font-medium text-gray-700">
                Loyer estimé :
              </p>
              <p className="text-gray-800 font-semibold">
                {result.loyer.estimation}
              </p>
              <p className="text-sm text-gray-600">
                {result.loyer.explication}
              </p>
            </div>

            <div>
              <p className="text-lg font-medium text-gray-700">
                Fiscalité conseillée :
              </p>
              <p className="text-gray-800 font-semibold">
                {result.fiscalite.regime}
              </p>
              <p className="text-sm text-gray-600">
                {result.fiscalite.explication}
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-700 mb-2">
                Recommandations :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {result.recommandations.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-700 mb-2">Points forts :</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {result.forces.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-700 mb-2">Points faibles :</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {result.faiblesses.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-700 mb-2">
                Stratégie optimale :
              </p>
              <p className="text-gray-700">{result.strategie}</p>
            </div>

            <div>
              <p className="font-medium text-gray-700 mb-2">
                Questions à poser :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {result.questions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
