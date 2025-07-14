"use client";

import CallbackUrlWrapper from "@/components/CallbackUrlWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent, callbackUrl: string) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    if (res?.error) {
      setError("Email ou mot de passe incorrect");
    } else {
      router.push(callbackUrl);
    }
  };

  const handleGoogleLogin = async (callbackUrl: string) => {
    await signIn("google", { callbackUrl });
  };

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <CallbackUrlWrapper>
        {(callbackUrl) => (
          <div className="bg-white">
            <Header />
            <div className="max-w-md mx-auto mt-30 bg-white p-8 my-10 shadow-md rounded-md">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Connexion
              </h2>

              {error && (
                <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
                  {error}
                </div>
              )}

              <form
                onSubmit={(e) => handleLogin(e, callbackUrl)}
                className="space-y-4"
              >
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Connexion
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">ou</p>
                <button
                  onClick={() => handleGoogleLogin(callbackUrl)}
                  className="w-full border text-gray-700 font-medium py-2 px-4 rounded-md hover:bg-gray-50"
                >
                  Continuer avec Google
                </button>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </CallbackUrlWrapper>
    </Suspense>
  );
}
