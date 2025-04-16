import { CircleCheck, CircleCheckBig, CircleX } from "lucide-react"; // Ajoutez les icônes nécessaires
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 backdrop-blur-2xl z-50 border-b border-gray-100 transform transition-transform duration-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-[600] tracking-tight text-blue-500">
              PropertAI
            </span>
          </div>
          <Link
            href="/signup"
            className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium"
          >
            Tester l'outil
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-30 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Geometric Pattern */}
        <div className="absolute inset-0 geometric-pattern" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="mb-4 inline-flex items-center text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full shadow-sm italic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Déjà plus de 100 analyses réalisées pour des investisseurs partout
            en France
          </p>
          <h1 className="text-4xl sm:text-5xl/16 font-[600] text-gray-900 mb-8">
            Décelez la vraie rentabilité derrière n'importe quelle annonce
            immobilière
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Analysez instantanément n'importe quelle annonce et découvrez ses
            leviers de rentabilité cachés grâce à l'IA.
          </p>
          <div className="max-w-2xl mx-auto">
            <textarea
              className="w-full h-32 p-4 border border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-4"
              placeholder="Collez ici le texte d'une annonce immobilière..."
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium">
              Analyser cette annonce
            </button>
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl/12 font-[400] text-center mb-4">
            Vous perdez du temps à évaluer des biens <br /> qui ne valent pas le
            coup ?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
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
          <h2 className="text-3xl sm:text-4xl/12 font-[400] text-center text-gray-900 mb-4">
            Comment PropertAI se distingue <br />
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
                  <th className="px-6 py-4 font-bold text-lg bg-blue-100 text-blue-500 text-center">
                    PropertAI
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

      <section className="bg-gray-50 py-20 px-6 md:px-20" id="faq">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl/12 font-[400] text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Tout ce que vous devez savoir avant de vous lancer avec PropertAI.
          </p>

          <div className="space-y-4 text-left">
            <details className="bg-white rounded-xl shadow-md p-5 group">
              <summary className="cursor-pointer list-none font-medium text-lg text-gray-900 flex justify-between items-center">
                <span>Comment fonctionne l’analyse d’annonce ?</span>
                <svg
                  className="w-5 h-5 transition-transform group-open:rotate-180 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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

      <section className="overflow-hidden py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl/12 font-[400] text-gray-900">
              Ils ont testé, ils recommandent.
            </h2>
            <p className="text-gray-600 mt-2">
              Des investisseurs de toute la France utilisent déjà PropertAI pour
              gagner du temps et prendre de meilleures décisions.
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
      </section>

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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Déjà plus de 100 analyses réalisées pour des investisseurs partout
            en France
          </p>

          <h2 className="text-3xl sm:text-4xl/12 font-[400] text-gray-800 leading-tight mb-4">
            Collez une description. Obtenez une analyse.
          </h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            PropertAI transforme n'importe quelle annonce en rapport clair et
            actionnable.
            <br className="hidden sm:block" /> Gratuit, instantané, sans
            inscription.
          </p>

          <a
            href="#analyse"
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Analyser une description maintenant
          </a>
        </div>
      </section>

      <footer className="bg-[#0e1a2b] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-300">PropertAI</h2>
            <p className="mt-2 text-gray-400">
              L’intelligence artificielle au service de votre prochain
              investissement.
            </p>
          </div>

          <div>
            <h3 className="uppercase text-gray-400 tracking-wide mb-4">
              Produit
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Analyse gratuite
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-gray-400 tracking-wide mb-4">
              Ressources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Comparatif
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-gray-400 tracking-wide mb-4">
              Légal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  CGU
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500">
              © PropertAI 2025. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-400 transition-opacity opacity-80 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v13H.5zM8.5 8h3.56v1.78h.05c.5-.95 1.75-1.95 3.61-1.95 3.86 0 4.58 2.55 4.58 5.88V21h-4V14.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.43V21h-4V8z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-opacity opacity-80 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.38 8.62 8.62 0 01-2.72 1.04A4.29 4.29 0 0015.5 4c-2.4 0-4.36 1.95-4.36 4.36 0 .34.04.68.11 1C7.69 9.2 4.85 7.54 2.98 5.02a4.36 4.36 0 00-.59 2.2c0 1.52.77 2.86 1.93 3.65a4.3 4.3 0 01-1.98-.55v.06c0 2.12 1.51 3.89 3.5 4.29a4.3 4.3 0 01-1.97.08c.56 1.74 2.2 3 4.14 3.04a8.63 8.63 0 01-5.34 1.84c-.35 0-.7-.02-1.05-.06a12.17 12.17 0 006.57 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.7 8.7 0 0024 4.59a8.56 8.56 0 01-2.54.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
