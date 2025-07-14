"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function UpgradePage() {
  const handleCheckout = async (product: "monthly" | "annual") => {
    try {
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: product }), // ou "annual"
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirection vers Stripe
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      console.error("Erreur de paiement :", err);
      alert("Erreur lors du démarrage du paiement.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <Header />
      <div className="max-w-3xl mx-auto my-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Choisissez votre abonnement PropertAI
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Mensuel */}
          <div className="bg-white shadow rounded-lg p-6 border border-orange-300 flex flex-col">
            <h2 className="text-xl font-bold text-orange-600 mb-2">Mensuel</h2>
            <p className="text-gray-600 mb-4">
              Sans engagement – 100% flexible
            </p>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              9,99 € / mois
            </p>
            <ul className="text-gray-700 mb-6 list-disc list-inside text-sm">
              <li>Analyses illimitées</li>
              <li>Support prioritaire</li>
              <li>Annulable à tout moment</li>
            </ul>
            <button
              onClick={() => handleCheckout("monthly")}
              className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition cursor-pointer"
            >
              Choisir le mensuel
            </button>
          </div>

          {/* Annuel */}
          <div className="bg-white shadow rounded-lg p-6 border border-blue-300 flex flex-col">
            <h2 className="text-xl font-bold text-blue-600 mb-2">Annuel</h2>
            <p className="text-gray-600 mb-4">
              Engagement 1 an – 2 mois offerts
            </p>
            <p className="text-3xl font-bold text-gray-800 mb-4">99 € / an</p>
            <ul className="text-gray-700 mb-6 list-disc list-inside text-sm">
              <li>Analyses illimitées</li>
              <li>Support prioritaire</li>
              <li>Économisez 20%</li>
            </ul>
            <button
              onClick={() => handleCheckout("annual")}
              className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition cursor-pointer"
            >
              Choisir l'annuel
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
