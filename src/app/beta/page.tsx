"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function BetaLanding() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-30 pb-10 bg-gradient-to-br from-orange-50 to-white px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-orange-600 font-semibold mb-4 uppercase">
              Accès anticipé
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Rejoignez la version bêta de{" "}
              <span className="text-orange-500">PropertAI</span>
            </h1>
            <p className="text-gray-700 text-lg mb-10">
              Testez l’outil avant tout le monde, donnez votre avis, et
              contribuez à façonner l’assistant immobilier idéal.
            </p>
            <Link
              href="/analyse"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Tester gratuitement
            </Link>
          </div>
        </section>

        {/* Vidéo Démo */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Découvrez l'outil en 60 secondes
            </h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Présentation PropertAI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Pourquoi devenir bêta-testeur ? */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi rejoindre le programme bêta ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-semibold text-lg mb-2 text-orange-500">
                  Accès en avant-première
                </h3>
                <p className="text-gray-600 text-sm">
                  Testez des fonctionnalités encore non disponibles au public.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-semibold text-lg mb-2 text-orange-500">
                  Influence directe
                </h3>
                <p className="text-gray-600 text-sm">
                  Vos retours guideront les prochaines évolutions de l’outil.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-semibold text-lg mb-2 text-orange-500">
                  Gratuit pendant la bêta
                </h3>
                <p className="text-gray-600 text-sm">
                  Profitez de toutes les fonctionnalités sans payer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-orange-50 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Prêt à essayer PropertAI ?
            </h2>
            <p className="text-gray-700 mb-6">
              C’est le moment idéal pour découvrir la plateforme et contribuer à
              son amélioration.
            </p>
            <Link
              href="/analyse"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Lancer une analyse gratuite
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
