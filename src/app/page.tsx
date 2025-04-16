import { CircleCheck, CircleCheckBig, CircleX, Users } from "lucide-react"; // Ajoutez les icônes nécessaires
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
          <div className="inline-block bg-white text-gray-700 border-gray-300 border-1 px-5 py-1 rounded-full mb-8 italic">
            <div className="flex gap-4 h-full items-center align-middle">
              <Users className="w-6 h-6 text-blue-500" aria-hidden="true" />
              <span className="text-sm font-[500] h-full">
                Déjà plus de 100 analyses réalisées pour des investisseurs
                partout en France
              </span>
            </div>
          </div>
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl/12 font-[400] text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-xl font-[300] mb-2">
                Dois-je créer un compte ?
              </h3>
              <p className="text-gray-600">
                Non, vous pouvez tester l'outil gratuitement sans inscription.
                Créez un compte uniquement si vous souhaitez sauvegarder vos
                analyses.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-xl font-[300] mb-2">
                L'outil est-il fiable ?
              </h3>
              <p className="text-gray-600">
                Notre IA est entraînée sur des milliers d'annonces et de cas
                réels. Les analyses sont basées sur des critères objectifs et
                des données vérifiées.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-xl font-[300] mb-2">
                Puis-je analyser plusieurs annonces ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez analyser autant d'annonces que vous le
                souhaitez. La version gratuite offre 3 analyses par mois.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
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

      {/* Testimonial Section */}
      <section className="py-20 animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-[300] text-gray-700 italic">
            "PropertAI m'a permis de découvrir des opportunités que j'aurais
            manquées. L'analyse des leviers de rentabilité est vraiment
            impressionnante."
          </blockquote>
          <p className="mt-4 text-gray-600">
            - Thomas L., Investisseur immobilier
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 text-white animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-[300] mb-6">
            Prêt à optimiser vos investissements immobiliers ?
          </h2>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 bg-white text-blue-500 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            Tester gratuitement
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-xl font-[300] text-blue-500 mb-4 md:mb-0">
              PropertAI
            </span>
            <div className="flex gap-6">
              <Link
                href="/legal"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
