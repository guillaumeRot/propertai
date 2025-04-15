import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-b border-gray-100 transform transition-transform duration-500">
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
          <div className="inline-block bg-white text-blue-500 border-blue-500 border-1 px-5 py-1 rounded-full mb-10">
            <span className="text-sm font-[500]">
              📈 +100 rapports générés par des investisseurs ->
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-[600] text-gray-900 mb-8">
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-[300] text-gray-900 mb-2">
                Gagnez du temps
              </h3>
              <p className="text-gray-600">
                Analyse instantanée des annonces sans perte de temps
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-[300] text-gray-900 mb-2">
                Détectez les opportunités
              </h3>
              <p className="text-gray-600">
                Identification des leviers de rentabilité cachés
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-[300] text-gray-900 mb-2">
                Recommandations IA
              </h3>
              <p className="text-gray-600">
                Suggestions concrètes pour optimiser votre investissement
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-[300] text-gray-900 mb-2">
                Prise de décision éclairée
              </h3>
              <p className="text-gray-600">
                Analyse complète pour des choix d'investissement avisés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-[300] text-center mb-12">
            Pourquoi choisir PropertAI ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left font-[300]">Outil</th>
                  <th className="py-4 px-6 text-left font-[300]">
                    Ce qu'il propose
                  </th>
                  <th className="py-4 px-6 text-left font-[300]">
                    Ce qui manque
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6">Recherche manuelle</td>
                  <td className="py-4 px-6">Analyse personnelle</td>
                  <td className="py-4 px-6">Temps perdu, biais humains</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6">Sites d'annonces</td>
                  <td className="py-4 px-6">Liste d'annonces</td>
                  <td className="py-4 px-6">Analyse de rentabilité</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">PropertAI</td>
                  <td className="py-4 px-6">Analyse IA complète</td>
                  <td className="py-4 px-6">Rien !</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-[300] text-center mb-12">
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
                souhaitez. La version gratuite offre 5 analyses par jour.
              </p>
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
