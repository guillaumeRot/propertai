"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
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
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Erreur inconnue");
      setLoading(false);
      return;
    }

    router.push("/auth/login");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded-md shadow">
      <h2 className="text-2xl font-semibold mb-6">Créer un compte</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mot de passe</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Création du compte..." : "Créer un compte"}
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
        Vous avez déjà un compte ?{" "}
        <Link href="/auth/login" className="text-orange-600 font-medium">
          Connectez-vous
        </Link>
      </p>
    </div>
  );
}
