"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import jsPDF from "jspdf";
import {
  BarChart3,
  CheckCircle,
  Euro,
  FileDown,
  Gavel,
  HelpCircle,
  Lightbulb,
  Loader2,
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
        loyer: "1 100 €/mois",
        explicationLoyer:
          "Estimé selon la surface et les loyers moyens du quartier.",
        fiscalite: "LMNP réel",
        explicationFiscalite:
          "Permet d’amortir le bien et de réduire fortement l’imposition sur les revenus locatifs.",
        recommandations: [
          "Diviser le bien en 2 lots pour augmenter le rendement.",
          "Passer en colocation meublée pour optimiser la fiscalité.",
        ],
        forces: ["Emplacement central", "Proche des transports"],
        faiblesses: ["Copropriété vieillissante", "Travaux à prévoir"],
        questions: ["Y a-t-il une cave ou des combles exploitables ?"],
        strategie:
          "Stratégie de colocation meublée en LMNP réel pour optimiser les revenus nets et la fiscalité.",
      });
      setLoading(false);
    }, 1500);
  };

  const handleExportPDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Rapport PropertAI", 20, 20);

    let y = 30;
    const addLine = (label: string, value: string) => {
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(`${label}`, 20, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      doc.text(value, 25, y);
      y += 10;
    };

    addLine("Rentabilité estimée :", result.rentabilite);
    addLine("Loyer estimé :", `${result.loyer}\n${result.explicationLoyer}`);
    addLine(
      "Fiscalité conseillée :",
      `${result.fiscalite}\n${result.explicationFiscalite}`
    );
    addLine("Recommandations :", result.recommandations.join("\n"));
    addLine("Points forts :", result.forces.join("\n"));
    addLine("Points faibles :", result.faiblesses.join("\n"));
    addLine("Questions à poser :", result.questions.join("\n"));
    addLine("Stratégie optimale :", result.strategie);

    doc.save("rapport_propertai.pdf");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-24">
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
          className="w-full text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-md py-3 transition duration-200"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin h-5 w-5" /> Analyse en cours...
            </span>
          ) : (
            "Lancer l'analyse"
          )}
        </button>

        {result && (
          <div className="mt-10 bg-white rounded-xl shadow p-6 space-y-8">
            <div className="flex items-center justify-center gap-2 text-gray-800 mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Résultats de l'analyse</h2>
            </div>

            {result && (
              <section className="mt-12 space-y-6">
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
                <div className="flex justify-between items-center">
                  <button
                    onClick={handleExportPDF}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md transition duration-200 shadow-md"
                  >
                    <FileDown className="w-5 h-5" />
                    Exporter en PDF
                  </button>
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
