"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSubscription } from "@/hooks/use-subscriptions";
import { jsPDF } from "jspdf";
import {
  BarChart3,
  CheckCircle,
  Euro,
  FileDown,
  Gavel,
  HelpCircle,
  Lightbulb,
  Loader2,
  TriangleAlert,
  Wrench,
  XCircle,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AnalysePage() {
  interface AnalyseResult {
    rentabilite: string;
    loyer: {
      estimation: string;
      explication: string;
    };
    explicationLoyer: string;
    fiscalite: {
      regime: string;
      explication: string;
    };
    explicationFiscalite: string;
    recommandations: string[];
    forces: string[];
    faiblesses: string[];
    questions: string[];
    strategie: string;
    estimationBien: {
      estimation: string;
      prixAffiche: string;
      prixM2Quartier: string;
      commentaire: string;
      positionnement: "bonne_affaire" | "negociable" | "surcote";
    };
    tensionLocative: {
      estZoneTendue: boolean;
      commentaire: string;
      infoReglementaire: string;
    };
  }

  const [description, setDescription] = useState("");
  const [result, setResult] = useState<AnalyseResult | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const { subscription, loading: loadingSubscription } = useSubscription();

  useEffect(() => {
    if (session === null) {
      router.push("/");
    }
  }, [session]);

  const handleAnalyse = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/analyse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error("Erreur d'analyse", err);
    }

    setLoading(false);
  };

  const getBase64FromUrl = async (url: string): Promise<string> => {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
    });
  };

  const handleExportPDF = async () => {
    if (!result) return;

    const doc = new jsPDF();
    const marginLeft = 20;
    const contentWidth = 170;
    let y = 20;
    let currentPage = 1;

    // Ajoute une image base64 du logo
    const logoBase64 = await getBase64FromUrl("/logo_orange_bleu.png");

    const primaryColor = [33, 150, 243]; // Bleu
    const backgroundColor = [240, 240, 240];
    const borderColor = [200, 200, 200];
    const greenColor = [76, 175, 80];
    const redColor = [244, 67, 54];

    // Logo
    doc.addImage(logoBase64, "PNG", marginLeft, y, 40, 8);
    y += 7;

    // Titre principal
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text("Rapport PropertAI", marginLeft + 50, y);
    y += 10;

    // Ligne de séparation
    doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
    doc.line(marginLeft, y, 190, y);
    y += 10;

    const addFooter = () => {
      doc.setFontSize(10);
      doc.setTextColor(130);
      doc.text(`Page ${currentPage}`, 180, 285, { align: "right" });
      doc.text("Généré avec PropertAI – www.propertai.fr", marginLeft, 285);
    };

    const addSection = (
      title: string,
      content: string | string[],
      options?: { color?: number[] }
    ) => {
      if (y > 240) {
        addFooter();
        doc.addPage();
        currentPage++;
        y = 20;
      }

      const padding = 4;
      const boxTop = y;
      const boxLeft = marginLeft - 2;

      const text = typeof content === "string" ? content : content.join("\n");
      const lines = doc.splitTextToSize(text, contentWidth - 2 * padding);
      const boxHeight = lines.length * 6 + 16;

      const sectionColor = options?.color ?? primaryColor;

      doc.setFillColor(
        backgroundColor[0],
        backgroundColor[1],
        backgroundColor[2]
      );
      doc.roundedRect(boxLeft, boxTop, contentWidth, boxHeight, 3, 3, "F");

      doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
      doc.roundedRect(boxLeft, boxTop, contentWidth, boxHeight, 3, 3);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(sectionColor[0], sectionColor[1], sectionColor[2]);
      doc.text(title, boxLeft + padding, y + 8);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(lines, boxLeft + padding, y + 16);

      y += boxHeight + 6;
    };

    // Sections principales
    addSection("Rentabilité estimée", result.rentabilite);
    addSection(
      "Loyer estimé",
      `${result.loyer.estimation}\n\n${result.loyer.explication}`
    );
    addSection(
      "Fiscalité conseillée",
      `${result.fiscalite.regime}\n\n${result.fiscalite.explication}`
    );
    addSection("Recommandations", result.recommandations);
    addSection("Points forts", result.forces, { color: greenColor });
    addSection("Points faibles", result.faiblesses, { color: redColor });
    addSection("Questions à poser", result.questions);
    addSection("Stratégie optimale", result.strategie);

    addFooter();
    doc.save("rapport_propertai.pdf");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-24 w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Analysez votre bien en un instant
        </h1>

        {!loadingSubscription && subscription?.plan === "FREE" && (
          <div className="mb-6 p-4 bg-orange-100 border border-orange-300 text-orange-800 rounded-md text-sm text-center">
            🔎 Il vous reste <strong>{subscription.remaining}</strong> analyse
            {subscription.remaining !== 1 ? "s" : ""} gratuite
            {subscription.remaining !== 1 ? "s" : ""}.
          </div>
        )}

        <textarea
          placeholder="Collez ici la description du bien immobilier..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={8}
          className="w-full border border-gray-300 rounded-md p-4 mb-4 shadow-sm"
        />

        {!loadingSubscription &&
        subscription?.plan === "FREE" &&
        subscription.remaining === 0 ? (
          <div className="w-full flex flex-col items-center bg-red-50 border border-red-200 text-red-700 rounded-md p-4 mb-6">
            <p className="text-sm font-medium mb-2">
              Vous avez atteint la limite de 10 analyses gratuites.
            </p>
            <a
              href="/upgrade-abo"
              className="text-sm text-white bg-orange-500 hover:bg-orange-600 font-semibold px-4 py-2 rounded-md transition duration-200"
            >
              🔓 Passer à l’abonnement
            </a>
          </div>
        ) : (
          <button
            onClick={handleAnalyse}
            disabled={!description || loading}
            className="w-full text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-md py-3 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin h-5 w-5" /> Analyse en cours...
              </span>
            ) : (
              "Lancer l'analyse"
            )}
          </button>
        )}

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
                    <TriangleAlert
                      className={`w-5 h-5 ${
                        result.tensionLocative.estZoneTendue
                          ? "text-orange-500"
                          : "text-gray-500"
                      }`}
                    />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Tension locative
                    </h3>
                    <span
                      className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                        result.tensionLocative.estZoneTendue
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {result.tensionLocative.estZoneTendue
                        ? "Zone tendue"
                        : "Zone non tendue"}
                    </span>
                  </div>

                  <div className="text-gray-700 space-y-2">
                    <p>{result.tensionLocative.commentaire}</p>
                    {result.tensionLocative.estZoneTendue && (
                      <p className="text-sm text-gray-500">
                        {result.tensionLocative.infoReglementaire}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Euro className="w-5 h-5 text-gray-800" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Estimation du bien
                    </h3>

                    {/* Badge positionnement */}
                    {result.estimationBien.positionnement ===
                      "bonne_affaire" && (
                      <span className="ml-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                        Bonne affaire
                      </span>
                    )}
                    {result.estimationBien.positionnement === "negociable" && (
                      <span className="ml-2 px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
                        Prix négociable
                      </span>
                    )}
                    {result.estimationBien.positionnement === "surcote" && (
                      <span className="ml-2 px-2 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
                        Prix surcôté
                      </span>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                    <div>
                      <p className="text-sm text-gray-500">
                        Prix estimé par l’analyse :
                      </p>
                      <p className="text-lg font-bold">
                        {result.estimationBien.estimation}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Prix affiché dans l’annonce :
                      </p>
                      <p className="text-lg font-bold">
                        {result.estimationBien.prixAffiche}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Prix moyen au m² :
                      </p>
                      <p className="text-lg font-bold">
                        {result.estimationBien.prixM2Quartier}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-sm text-gray-500">Analyse :</p>
                      <p className="text-gray-700">
                        {result.estimationBien.commentaire}
                      </p>
                    </div>
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
