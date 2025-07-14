"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSubscription } from "@/hooks/use-subscriptions";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function MonComptePage() {
  const { data: session, status } = useSession();
  const { subscription, loading } = useSubscription();
  const router = useRouter();

  if (status === "loading" || loading) {
    return <p className="p-8 text-center">Chargement...</p>;
  }

  if (!session) {
    router.push("/");
    return null;
  }

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "–";
    return format(new Date(dateStr), "dd MMMM yyyy", { locale: fr });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <Header />
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6 my-15">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">👤 Mon compte</h1>

        <div className="space-y-4 text-gray-700 text-sm">
          <p>
            <strong>Email :</strong> {session.user?.email}
          </p>

          <p>
            <strong>Abonnement :</strong>{" "}
            <span
              className={`font-semibold ${
                subscription?.plan === "FREE"
                  ? "text-gray-600"
                  : subscription?.plan === "MONTHLY"
                    ? "text-orange-600"
                    : "text-blue-600"
              }`}
            >
              {subscription?.plan === "FREE"
                ? "Gratuit"
                : subscription?.plan === "MONTHLY"
                  ? "Mensuel"
                  : "Annuel"}
            </span>
          </p>

          {subscription?.plan !== "FREE" && (
            <p>
              <strong>Renouvellement prévu le :</strong>{" "}
              {formatDate(subscription?.currentPeriodEnd)}
            </p>
          )}

          {subscription?.plan === "FREE" && (
            <>
              <p>
                <strong>Analyses utilisées :</strong>{" "}
                {subscription?.analysesUsed} / 10
              </p>
              <p>
                <strong>Restantes :</strong> {subscription?.remaining}
              </p>
            </>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/upgrade-abo"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition duration-200"
          >
            🔁 Modifier mon abonnement
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
