import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function PaiementCancel() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Paiement annulé ❌
        </h1>
        <p className="text-gray-700 text-center max-w-md mb-6">
          Vous avez annulé le processus de paiement. Aucun montant n’a été
          débité. Vous pouvez réessayer à tout moment si vous changez d’avis.
        </p>
        <Link
          href="/abonnement-annuel"
          className="text-orange-500 hover:underline"
        >
          Revenir à l’abonnement
        </Link>
      </div>
      <Footer />
    </>
  );
}
