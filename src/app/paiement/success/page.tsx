import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PaiementSuccess() {
  return (
    <>
      <Header />
      <div className="pt-30 pb-8 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Paiement réussi !
        </h1>
        <p className="text-gray-700">
          Merci pour votre abonnement ! Vous pouvez maintenant utiliser toutes
          les fonctionnalités de PropertAI.
        </p>
      </div>
      <Footer />
    </>
  );
}
