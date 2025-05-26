import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function FAQPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-6 pt-30 pb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Foire aux questions
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              Comment fonctionne PropertAI ?
            </h2>
            <p className="text-gray-700">
              Il vous suffit de copier/coller une description d’annonce
              immobilière. L’IA analyse le texte et croise les données locales
              (prix au m², loyers, tension locative, etc.) pour générer un
              rapport complet : rentabilité, fiscalité, forces/faiblesses, etc.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              L’analyse est-elle fiable ?
            </h2>
            <p className="text-gray-700">
              PropertAI s’appuie sur les dernières technologies d’intelligence
              artificielle combinées à des bases de données publiques fiables
              (INSEE, Etalab, etc.). Le rapport reste une aide à la décision,
              pas une validation juridique ou fiscale.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              Est-ce que je peux tester gratuitement ?
            </h2>
            <p className="text-gray-700">
              Oui, vous pouvez tester gratuitement l’outil avec une première
              analyse offerte. Il suffit de coller une annonce et de saisir
              votre email pour recevoir le rapport PDF.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              Quelle est la différence entre les deux abonnements ?
            </h2>
            <p className="text-gray-700">
              L’offre sans engagement est à 12€/mois, résiliable à tout moment.
              L’offre annuelle revient à 9€/mois si vous payez pour l’année
              (96€/an). Les deux donnent accès à toutes les fonctionnalités :
              analyse illimitée, PDF, historique, etc.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              Est-ce que je peux résilier facilement ?
            </h2>
            <p className="text-gray-700">
              Oui, à tout moment depuis votre espace client. La résiliation
              prend effet à la fin de la période d’abonnement en cours.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              Est-ce que mes données sont confidentielles ?
            </h2>
            <p className="text-gray-700">
              Absolument. Vos données ne sont jamais revendues ni partagées.
              Nous respectons le RGPD et ne stockons que le strict nécessaire
              pour vous fournir le service (email, analyses, etc.).
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
