"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  BarChart3,
  CheckCircle,
  Euro,
  Gavel,
  HelpCircle,
  Lightbulb,
  Wrench,
  XCircle,
} from "lucide-react";
import { useState } from "react";

export default function AnalysePage() {
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyse = async () => {
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        rentabilite: "7.8%",
        loyer: {
          estimation: "950€/mois",
          explication:
            "Basé sur des biens similaires dans le quartier ces 6 derniers mois.",
        },
        fiscalite: {
          regime: "LMNP réel",
          explication:
            "Amortissement du bien + charges déductibles. Idéal pour location meublée.",
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
          className="w-full border border-gray-300 rounded-md p-4 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={handleAnalyse}
          disabled={!description || loading}
          className="w-full py-3 text-lg font-semibold bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 disabled:bg-gray-400 transition-colors"
        >
          {loading ? "Analyse en cours..." : "Lancer l'analyse"}
        </button>

        {result && (
          <section className="mt-12 space-y-6">
            <div className="flex items-center justify-center gap-2 text-gray-800 mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Résultats de l'analyse</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow p-4">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="text-blue-600 w-5 h-5" />
                  <h3 className="text-lg font-semibold text-blue-600">
                    Rentabilité estimée
                  </h3>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {result.rentabilite}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Euro className="w-5 h-5 text-gray-800" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Loyer estimé
                  </h3>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  {result.loyer.estimation}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {result.loyer.explication}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Gavel className="w-5 h-5 text-gray-800" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Fiscalité conseillée
                  </h3>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  {result.fiscalite.regime}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {result.fiscalite.explication}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-gray-800" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Stratégie optimale
                  </h3>
                </div>
                <p className="text-gray-700">{result.strategie}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-gray-800" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Recommandations
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {result.recommandations.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-700" />
                  <h3 className="text-lg font-semibold text-green-700">
                    Points forts
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {result.forces.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-700" />
                  <h3 className="text-lg font-semibold text-red-700">
                    Points faibles
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {result.faiblesses.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-gray-800" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Questions à poser
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {result.questions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
