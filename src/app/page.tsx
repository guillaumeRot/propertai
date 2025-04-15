import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-[300] tracking-tight text-blue-900">
              PropertAI
            </span>
          </div>
          <Link
            href="/signup"
            className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors duration-200 font-medium"
          >
            Tester gratuitement
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-[300] text-blue-900 mb-6">
            Trouvez le bien idéal pour votre client en quelques secondes
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Décrivez les critères de recherche de votre client, et recevez une
            sélection d'annonces pertinentes, enrichies par l'IA.
          </p>
          <div className="max-w-2xl mx-auto">
            <textarea
              className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none mb-4"
              placeholder="Je cherche un T3 lumineux à Lyon pour de la LCD"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors duration-200 font-medium">
              Analyser la demande
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-[300] text-blue-900 mb-2">
                Analyse automatique
              </h3>
              <p className="text-gray-600">
                Compréhension intelligente des critères de recherche
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏘️</div>
              <h3 className="text-xl font-[300] text-blue-900 mb-2">
                Sélection intelligente
              </h3>
              <p className="text-gray-600">
                Annonces pertinentes triées par pertinence
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-[300] text-blue-900 mb-2">
                Suggestions IA
              </h3>
              <p className="text-gray-600">
                Idées de valorisation et d'optimisation
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📩</div>
              <h3 className="text-xl font-[300] text-blue-900 mb-2">
                Résumé détaillé
              </h3>
              <p className="text-gray-600">
                Synthèse complète envoyée par email
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-[300] text-gray-700 italic">
            "J'ai trouvé en 2 minutes ce que je cherchais depuis 2 jours. Et
            j'ai même eu des idées de valorisation que je n'aurais pas
            imaginées."
          </blockquote>
          <p className="mt-4 text-gray-600">
            - Marie D., Agent immobilier à Paris
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-[300] mb-6">
            Essayez PropertAI dès maintenant. Gagnez du temps, proposez mieux.
          </h2>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            Je teste gratuitement
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-xl font-[300] text-blue-900 mb-4 md:mb-0">
              PropertAI
            </span>
            <div className="flex gap-6">
              <Link href="/legal" className="text-gray-600 hover:text-blue-900">
                Mentions légales
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-900"
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
