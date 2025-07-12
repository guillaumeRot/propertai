// app/mes-analyses/page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MesAnalysesPage() {
  const session = await getServerSession();
  const prisma = new PrismaClient();

  if (!session?.user?.email) {
    redirect("/");
  }

  const analyses = await prisma.analyse.findMany({
    where: {
      userEmail: session.user.email,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col mt-20">
      <Header />
      <main className="max-w-5xl mx-auto py-16 px-4 flex-grow">
        <h1 className="text-3xl font-bold mb-8">📂 Mes analyses</h1>

        {analyses.length === 0 ? (
          <p className="text-gray-600">
            Aucune analyse enregistrée pour le moment.
          </p>
        ) : (
          <div className="space-y-6">
            {analyses.map((a) => (
              <div
                key={a.id}
                className="bg-white shadow rounded-lg p-4 border-l-4 border-orange-500"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-500">
                    Analyse du{" "}
                    {new Date(a.createdAt).toLocaleDateString("fr-FR")}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-2 line-clamp-3">
                  <strong>Description :</strong> {a.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <p>
                    <strong>Rentabilité :</strong> {a.rentabilite}
                  </p>
                  <p>
                    <strong>Loyer estimé :</strong> {a.loyerEstimation}
                  </p>
                  <p>
                    <strong>Fiscalité :</strong> {a.fiscaliteRegime}
                  </p>
                  <p>
                    <strong>Prix affiché :</strong> {a.prixAffiche}
                  </p>
                  <p>
                    <strong>Prix estimé :</strong> {a.estimation}
                  </p>
                  <p>
                    <strong>Positionnement :</strong> {a.positionnement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
