"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Erreur inconnue");
      setLoading(false);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="pt-28 pb-16 bg-gradient-to-br from-orange-50 to-white px-6 text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              10 analyses offertes{" "}
              <span className="text-orange-500">avec export PDF</span>
            </h1>
            <p className="text-gray-700 text-lg mb-10">
              Gratuit, sans carte bancaire. En moins de 30 secondes.
            </p>

            {error ? (
              <p className="text-red-600 font-medium text-lg mb-6 text-center">
                {error}
              </p>
            ) : (
              <></>
            )}

            {!submitted ? (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 max-w-md mx-auto text-left"
                >
                  <input
                    type="text"
                    required
                    placeholder="Prénom"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-3 shadow-sm"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-3 shadow-sm"
                  />
                  <input
                    type="password"
                    required
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-3 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
                    disabled={loading}
                  >
                    {loading ? "Création du compte..." : "Créer un compte"}
                  </button>
                </form>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Vous avez déjà un compte ?{" "}
                  <a
                    href="/auth/login"
                    className="text-orange-500 hover:underline font-medium"
                  >
                    Connectez-vous ici
                  </a>
                </p>
              </>
            ) : (
              <div className="mt-6">
                <p className="text-green-600 font-medium text-lg mb-6 text-center">
                  Bienvenue ! Votre compte est créé.
                  <br />
                  Vous pouvez maintenant analyser vos annonces.
                </p>
                <a
                  href="/analyse"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded shadow transition"
                >
                  Lancer une analyse maintenant
                </a>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
