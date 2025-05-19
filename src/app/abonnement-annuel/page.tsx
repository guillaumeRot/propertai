"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AbonnementMensuel() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "annual" }), // ou "monthly"
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto pt-30 pb-16 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Offre Engagement 12 mois
        </h1>
        <div className="bg-orange-100 border-2 border-orange-500 p-6 rounded-xl shadow-md">
          <p className="text-gray-700 mb-4">
            Abonnement annuel – 99 € / an (soit 8,25 € / mois)
          </p>
          <ul className="space-y-3 mb-6 text-gray-800">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> 200 analyses / mois
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> Export PDF
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> Historique des analyses
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> Économisez 31 €
            </li>
          </ul>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition disabled:opacity-50"
          >
            {loading ? "Redirection..." : "Procéder au paiement"}
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Besoin d’aide ?{" "}
          <Link href="/contact" className="underline">
            Contactez-nous
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
