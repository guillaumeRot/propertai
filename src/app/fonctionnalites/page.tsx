// app/fonctionnalites/page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function FonctionnalitesPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-6 pt-30 pb-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Fonctionnalités de PropertAI
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-orange-500 mb-4">
              Analyse instantanée d’annonce
            </h2>
            <p className="text-gray-700 mb-4">
              Collez simplement une description d’annonce immobilière :
              PropertAI estime automatiquement la rentabilité, le loyer, la
              fiscalité conseillée, les points forts et faibles, et vous livre
              une synthèse exploitable.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Rentabilité
                brute calculée
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Fiscalité
                optimale conseillée
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Estimation du
                prix réel du bien
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-orange-500 mb-4">
              Export PDF professionnel
            </h2>
            <p className="text-gray-700 mb-4">
              Génère un rapport PDF complet et structuré à partager avec ton
              banquier, associé ou coach. Idéal pour monter ton dossier ou
              valider rapidement un bien.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Rapport
                synthétique & clair
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Couleurs,
                icônes, mise en forme
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" />{" "}
                Téléchargement et envoi par email
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-orange-500 mb-4">
              Recommandations & questions à poser
            </h2>
            <p className="text-gray-700 mb-4">
              PropertAI t’aide à poser les bonnes questions au vendeur, à
              l’agent ou au notaire. Il met aussi en avant les actions à
              prioriser.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Alertes sur
                les points critiques
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Conseils
                stratégiques clairs
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Liste de
                questions pertinentes
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-orange-500 mb-4">
              Accès aux données locales & tension locative
            </h2>
            <p className="text-gray-700 mb-4">
              L’analyse s’appuie sur des données locales précises (prix, loyers,
              vacance, type de population, etc.) pour détecter les zones tendues
              et t’aiguiller sur la demande.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Données
                locales fiables
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Détection
                automatique des zones tendues
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Mise à jour
                régulière des bases
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link
            href="/analyse"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow transition"
          >
            Tester gratuitement
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
