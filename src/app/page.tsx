"use client";

import EmailModal from "@/components/EmailModal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CircleCheck, CircleCheckBig, CircleX } from "lucide-react"; // Ajoutez les icônes nécessaires
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleEmailSubmit = async ({
    email,
    firstName,
  }: {
    email: string;
    firstName: string;
  }) => {
    try {
      await fetch("/api/save-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });
    } catch (err) {
      console.error("Erreur lors de l’envoi de l’email :", err);
    }
    sessionStorage.setItem("analyseDescription", description);
    setShowModal(false);
    router.push("/analyse");
  };

  return (
    <div className="min-h-screen bg-white">
      <EmailModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleEmailSubmit}
      />

      <Header />
      {/* Hero Section */}
      <section className="relative pt-30 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 hero-gradient fade-to-transparent-top" />

        {/* Geometric Pattern */}
        <div className="absolute inset-0 geometric-pattern" />

        <div className="relative max-w-5xl mx-auto text-center">
          <p className="mb-6 inline-flex items-center text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full shadow-sm italic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Déjà plus de 100 analyses réalisées pour des investisseurs partout
            en France
          </p>
          <h1 className="text-5xl sm:text-6xl/18 font-bold text-gray-900 mb-8">
            Repérez les <span className="text-orange-500">pépites.</span> <br />
            Évitez les mauvaises surprises.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Analysez instantanément n'importe quelle annonce immobilière et
            découvrez ses leviers de rentabilité cachés grâce à l'IA. <br />
            Créez votre compte gratuitement et profitez de 10 analyses offertes.
          </p>

          <div className="max-w-2xl mx-auto">
            <a
              href="/inscription"
              className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium text-lg"
            >
              Créer mon compte (10 analyses offertes)
            </a>
          </div>
        </div>
      </section>
      {/* Problems & Solutions Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl/12 font-semibold text-center mb-4">
            Vous <span className="text-orange-500">perdez du temps</span> à
            évaluer des biens <br /> qui ne valent pas le coup ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#3A3A3A] text-center mx-auto mb-12">
            PropertAI analyse pour vous les annonces et révèle leur vrai
            potentiel d'investissement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <svg
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-10 w-1 h-[90%] text-gray-200"
              fill="none"
              viewBox="0 0 1 100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1" height="100%" fill="currentColor" />
            </svg>

            {/* Problèmes */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                Les défis que vous rencontrez
              </h3>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow duration-300 relative group min-h-[120px]">
                  <div className="flex gap-4 h-full">
                    <CircleX
                      className="w-8 h-8 text-red-500"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="font-medium text-gray-800 mb-1">
                        Une annonce semble bien... mais est-elle rentable ?
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Difficile d'évaluer la rentabilité réelle sans analyse
                        approfondie.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow duration-300 relative group min-h-[120px]">
                  <div className="flex gap-4 h-full">
                    <CircleX
                      className="w-8 h-8 text-red-500"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="font-medium text-gray-800 mb-1">
                        Trop d'annonces, pas assez de temps pour tout lire.
                      </h4>
                      <p className="text-gray-600 text-sm">
                        La recherche manuelle prend des heures précieuses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow duration-300 relative group min-h-[120px]">
                  <div className="flex gap-4 h-full">
                    <CircleX
                      className="w-8 h-8 text-red-500"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="font-medium text-gray-800 mb-1">
                        Impossible de tout estimer : loyers, travaux,
                        fiscalité...
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Les calculs sont complexes et chronophages.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow duration-300 relative group min-h-[120px]">
                  <div className="flex gap-4 h-full">
                    <CircleX
                      className="w-8 h-8 text-red-500"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="font-medium text-gray-800 mb-1">
                        Je passe à côté de bonnes affaires sans le savoir.
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Les opportunités cachées sont difficiles à repérer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                Ce que PropertAI fait pour vous
              </h3>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow duration-300 relative group min-h-[120px]">
                  <div className="flex gap-4 h-full">
                    <CircleCheckBig
                      className="w-8 h-8 text-orange-500"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="text-orange-500 font-bold mb-1">
                        Analyse automatique de rentabilité
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Résultats détaillés dès que vous collez l'annonce.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow duration-300 relative group min-h-[120px]">
                  <div className="flex gap-4 h-full">
                    <CircleCheckBig
                      className="w-8 h-8 text-orange-500"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="text-orange-500 font-bold mb-1">
                        Un seul clic suffit
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Plus besoin de lire 10 annonces, gagnez des heures.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow duration-300 relative group min-h-[120px]">
                  <div className="flex gap-4 h-full">
                    <CircleCheckBig
                      className="w-8 h-8 text-orange-500"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="text-orange-500 font-bold mb-1">
                        Estimation complète et détaillée
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Loyers, fiscalité, points faibles, stratégie optimale.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow duration-300 relative group min-h-[120px]">
                  <div className="flex gap-4 h-full">
                    <CircleCheckBig
                      className="w-8 h-8 text-orange-500"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="text-orange-500 font-bold mb-1">
                        Suggestions concrètes d'optimisation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Division, location optimisée, amélioration du rendement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl/12 font-semibold text-center text-gray-900 mb-4">
            Comment <span className="text-orange-500">PropertAI</span> se
            distingue <br />
            des autres outils du marché ?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Un comparatif clair pour comprendre les limites des solutions
            actuelles et les avantages uniques de PropertAI.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-6 py-4 font-semibold text-sm">Critères</th>
                  <th className="px-6 py-4 font-semibold text-sm text-center">
                    Recherche manuelle
                  </th>
                  <th className="px-6 py-4 font-semibold text-sm text-center">
                    MoteurImmo & co
                  </th>
                  <th className="px-6 py-4 font-semibold text-sm text-center">
                    MeilleursAgents & co
                  </th>
                  {/* <th className="px-6 py-4 font-bold text-lg bg-blue-500 text-white text-center"> */}
                  <th className="px-6 py-4 bg-blue-500 text-center">
                    <Image
                      src="/logo_orange_blanc.png"
                      alt="Logo"
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-t">
                  <td className="px-6 py-4">
                    Recherche d’annonces immobilières
                  </td>
                  <td className="px-6 py-4">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold bg-blue-50">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Analyse de rentabilité complète</td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold bg-blue-50">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    Suggestions d’amélioration du bien
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold bg-blue-50">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    Estimation des loyers et cashflow
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold bg-blue-50">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Facilité d’usage</td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold bg-blue-50">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Gain de temps</td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold bg-blue-50">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    Accompagnement pensée "investisseur"
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CircleX
                      className="w-8 h-8 text-red-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold bg-blue-50">
                    <CircleCheck
                      className="w-8 h-8 text-green-500 mx-auto"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-center text-gray-400 mt-6">
            Comparatif basé sur les fonctionnalités clés utilisées par les
            investisseurs immobiliers.
          </p>
        </div>
      </section>

      <section id="pricing" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Commencez gratuitement. <br /> Passez à la vitesse supérieure quand
            vous êtes prêt.
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Créez un compte gratuit et profitez de 10 analyses avec export PDF.
            <br />
            Ensuite, débloquez un accès illimité avec nos offres premium.
          </p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Plan Gratuit */}
            <div className="border rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Essai gratuit
                </h3>
                <p className="text-gray-500 mb-4">
                  10 analyses offertes avec export PDF
                </p>
                <p className="text-3xl font-bold text-gray-900 mb-6">0 €</p>
                <br />
                <ul className="text-left text-gray-600 space-y-2 mb-8">
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    10 analyses offertes
                  </li>
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    Recommandations IA
                  </li>
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    Export PDF inclus
                  </li>
                </ul>
              </div>
              <a
                href="/inscription"
                className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold py-3 px-6 rounded-md transition"
              >
                Créer un compte gratuit
              </a>
            </div>

            {/* Sans Engagement */}
            <div className="border-2 border-orange-500 rounded-xl p-6 shadow-md bg-orange-50 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                  Sans engagement
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Le plus populaire
                  </span>
                </h3>
                <p className="text-gray-500 mb-4">
                  Accès complet et sans engagement
                </p>
                <p className="text-3xl font-bold text-gray-900 mb-6">
                  9,99 €<span className="text-base font-medium"> / mois</span>
                </p>
                <br />
                <ul className="text-left text-gray-700 space-y-2 mb-8">
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    200 analyses / mois
                  </li>
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    Export PDF pro
                  </li>
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    Historique des analyses
                  </li>
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    Résiliable à tout moment
                  </li>
                </ul>
              </div>
              <a
                href="/abonnement"
                className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold py-3 px-6 rounded-md transition"
              >
                S’abonner
              </a>
            </div>

            {/* Annuel */}
            <div className="border rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Engagement annuel
                </h3>
                <p className="text-gray-500 mb-4">
                  Meilleur tarif, engagement 12 mois
                </p>
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  99 €<span className="text-base font-medium"> / an</span>
                </p>
                <p className="text-sm text-green-600 mb-6">
                  Soit 8,25 € / mois
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-8">
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    200 analyses / mois
                  </li>
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    Export PDF pro
                  </li>
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    Historique des analyses
                  </li>
                  <li className="flex gap-4 items-center">
                    <CircleCheck className="w-6 h-6 text-green-500" />
                    Paiement unique annuel
                  </li>
                </ul>
              </div>
              <a
                href="/abonnement-annuel"
                className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold py-3 px-6 rounded-md transition"
              >
                Choisir cette offre
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl sm:text-4xl/12 font-semibold text-gray-900 mb-6">
          Commencez en 30 secondes.
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Créez votre compte et profitez de 10 analyses gratuites pour tester
          l’outil sans engagement.
        </p>
        <a
          href="/inscription"
          className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium text-lg"
        >
          Je teste gratuitement PropertAI
        </a>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-20" id="faq">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl/12 font-semibold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Tout ce que vous devez savoir avant de vous lancer avec{" "}
            <span className="text-orange-500">PropertAI</span>.
          </p>

          <div className="space-y-4 text-left">
            <details className="bg-white rounded-xl shadow-md p-5 group">
              <summary className="cursor-pointer list-none font-medium text-lg text-gray-900 flex justify-between items-center">
                <span>Comment fonctionne l’analyse d’annonce ?</span>
                <svg
                  className="w-5 h-5 transition-transform group-open:rotate-180 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Copiez la description d’un bien immobilier dans l’outil, et
                PropertAI génère instantanément une analyse de rentabilité et
                des leviers d’optimisation (colocation, division, LCD…).
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md p-5 group">
              <summary className="cursor-pointer list-none font-medium text-lg text-gray-900 flex justify-between items-center">
                <span>Est-ce que PropertAI fonctionne partout en France ?</span>
                <svg
                  className="w-5 h-5 transition-transform group-open:rotate-180 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Oui, l’outil est conçu pour analyser tout bien situé en France,
                peu importe la ville ou la taille du marché local.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md p-5 group">
              <summary className="cursor-pointer list-none font-medium text-lg text-gray-900 flex justify-between items-center">
                <span>
                  Dois-je m’y connaître en immobilier pour utiliser l’outil ?
                </span>
                <svg
                  className="w-5 h-5 transition-transform group-open:rotate-180 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Pas du tout ! L’outil vous guide pas à pas et vous livre des
                recommandations claires, même si vous débutez dans
                l’investissement.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md p-5 group">
              <summary className="cursor-pointer list-none font-medium text-lg text-gray-900 flex justify-between items-center">
                <span>PropertAI me donne-t-il une estimation des loyers ?</span>
                <svg
                  className="w-5 h-5 transition-transform group-open:rotate-180 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Oui, l’IA fournit une estimation réaliste des loyers attendus
                selon les caractéristiques du bien et sa localisation.
              </div>
            </details>
          </div>
        </div>
      </section>
      {/* <section className="overflow-hidden py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl/12 font-semibold text-gray-900">
              Ils ont testé, ils{" "}
              <span className="text-orange-500">recommandent</span>.
            </h2>
            <p className="text-gray-600 mt-2">
              Des investisseurs de toute la France utilisent déjà{" "}
              <span className="text-orange-500">PropertAI</span> pour gagner du
              temps et prendre de{" "}
              <span className="text-orange-500">meilleures décisions</span>.
            </p>
          </div>

          <div className="marquee">
            <div className="marquee-content">
              <div className="testimonial-card">
                “PropertAI m’a permis d’identifier une opportunité que j’aurais
                totalement ratée.”
                <br />
                <span className="author">— Julien, Lyon</span>
              </div>
              <div className="testimonial-card">
                “L’outil va droit au but. Rentable, clair, rapide.”
                <br />
                <span className="author">— Sarah, Bordeaux</span>
              </div>
              <div className="testimonial-card">
                “PropertAI m’aide à challenger mes agents avec des vraies
                analyses.”
                <br />
                <span className="author">— Farid, Marseille</span>
              </div>
              <div className="testimonial-card">
                “Un vrai gain de temps pour comparer les annonces.”
                <br />
                <span className="author">— Thomas, Paris</span>
              </div>

              <div className="testimonial-card">
                “PropertAI m’a permis d’identifier une opportunité que j’aurais
                totalement ratée.”
                <br />
                <span className="author">— Julien, Lyon</span>
              </div>
              <div className="testimonial-card">
                “L’outil va droit au but. Rentable, clair, rapide.”
                <br />
                <span className="author">— Sarah, Bordeaux</span>
              </div>
              <div className="testimonial-card">
                “PropertAI m’aide à challenger mes agents avec des vraies
                analyses.”
                <br />
                <span className="author">— Farid, Marseille</span>
              </div>
              <div className="testimonial-card">
                “Un vrai gain de temps pour comparer les annonces.”
                <br />
                <span className="author">— Thomas, Paris</span>
              </div>
            </div>
          </div>

          <div className="marquee reverse mt-6">
            <div className="marquee-content">
              <div className="testimonial-card">
                “C’est devenu un réflexe avant toute visite.”
                <br />
                <span className="author">— Claire, Lille</span>
              </div>
              <div className="testimonial-card">
                “Simple, rapide, sans bullshit. Bravo.”
                <br />
                <span className="author">— Antoine, Strasbourg</span>
              </div>
              <div className="testimonial-card">
                “On voit direct les forces/faiblesses d’un bien.”
                <br />
                <span className="author">— Laura, Nantes</span>
              </div>
              <div className="testimonial-card">
                “Merci pour cet outil. Un vrai plus pour négocier.”
                <br />
                <span className="author">— Rémi, Toulouse</span>
              </div>

              <div className="testimonial-card">
                “C’est devenu un réflexe avant toute visite.”
                <br />
                <span className="author">— Claire, Lille</span>
              </div>
              <div className="testimonial-card">
                “Simple, rapide, sans bullshit. Bravo.”
                <br />
                <span className="author">— Antoine, Strasbourg</span>
              </div>
              <div className="testimonial-card">
                “On voit direct les forces/faiblesses d’un bien.”
                <br />
                <span className="author">— Laura, Nantes</span>
              </div>
              <div className="testimonial-card">
                “Merci pour cet outil. Un vrai plus pour négocier.”
                <br />
                <span className="author">— Rémi, Toulouse</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] opacity-10 pointer-events-none"></div>

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="mb-4 inline-flex items-center text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full shadow-sm italic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Déjà plus de 100 analyses réalisées pour des investisseurs partout
            en France
          </p>

          <h2 className="text-3xl sm:text-4xl/12 font-semibold text-gray-800 leading-tight mb-4">
            Collez une <span className="text-orange-500">description</span>.{" "}
            <br /> Obtenez une <span className="text-orange-500">analyse</span>.
          </h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            <span className="text-orange-500">PropertAI</span> transforme
            n'importe quelle annonce en rapport clair et actionnable.
            <br className="hidden sm:block" /> Gratuit, instantané, sans carte
            bancaire.
            <br className="hidden sm:block" /> 10 analyses offertes dès
            l’inscription.
          </p>

          <a
            href="/inscription"
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-colors duration-200"
          >
            Créer mon compte gratuitement
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
