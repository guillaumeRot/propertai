import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle, XCircle } from "lucide-react";

export default function ComparatifPage() {
  const tableRows = [
    {
      feature: "Estimation du prix de vente",
      values: [false, false, true, true],
    },
    {
      feature: "Analyse de rentabilité locative",
      values: [true, true, false, true],
    },
    {
      feature: "Recommandations fiscales",
      values: [false, false, false, true],
    },
    {
      feature: "Analyse de la tension locative",
      values: [false, false, false, true],
    },
    {
      feature: "Export PDF",
      values: [false, false, false, true],
    },
    {
      feature: "Forces & faiblesses du bien",
      values: [false, false, false, true],
    },
    {
      feature: "Questions clés à poser",
      values: [false, false, false, true],
    },
    {
      feature: "Interface simple (copier-coller d'annonce)",
      values: [false, true, false, true],
    },
    {
      feature: "Accès sans création de compte",
      values: [true, true, false, true],
    },
    {
      feature: "Temps estimé pour une analyse",
      values: ["~30 min", "~2 min", "~5 min", "~30 sec"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-6 pt-30 pb-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Comparatif des solutions d’analyse immobilière
        </h1>

        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="w-full border-collapse bg-white text-left text-sm">
            <thead className="bg-orange-100">
              <tr>
                <th className="p-4 text-gray-700 font-semibold">
                  Fonctionnalité
                </th>
                <th className="p-4 text-center text-gray-700 font-semibold">
                  Recherche manuelle
                </th>
                <th className="p-4 text-center text-gray-700 font-semibold">
                  Moteur Immo
                </th>
                <th className="p-4 text-center text-gray-700 font-semibold">
                  Meilleurs Agents
                </th>
                <th className="p-4 text-center text-orange-600 font-bold">
                  PropertAI
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tableRows.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  {row.values.map((val, idx) => (
                    <td key={idx} className="p-4 text-center">
                      {typeof val === "boolean" ? (
                        val ? (
                          <CheckCircle className="text-green-500 w-5 h-5 mx-auto" />
                        ) : (
                          <XCircle className="text-red-400 w-5 h-5 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <a
            href="/analyse"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Lancer une analyse gratuitement
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
