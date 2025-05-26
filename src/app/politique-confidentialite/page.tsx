import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-30 pb-16 text-sm text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Politique de confidentialité
        </h1>

        <section>
          <h2 className="font-semibold text-lg mb-2">
            1. Responsable du traitement
          </h2>
          <p>
            Le site <strong>propertai.fr</strong> est édité par Guillaume Rot,
            qui agit en tant que responsable du traitement des données
            personnelles collectées via la plateforme.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">2. Données collectées</h2>
          <p>
            Nous collectons uniquement les données strictement nécessaires à
            l’usage du service :
          </p>
          <ul className="list-disc ml-6">
            <li>
              Email et prénom (lors de l’inscription ou lors de l’analyse
              gratuite)
            </li>
            <li>Mot de passe chiffré (authentification)</li>
            <li>
              Historique d’utilisation (analyses réalisées, exports PDF...)
            </li>
            <li>
              Adresse IP, navigateur, pages visitées (à des fins de sécurité et
              statistiques)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">
            3. Finalité du traitement
          </h2>
          <p>Les données collectées sont utilisées pour :</p>
          <ul className="list-disc ml-6">
            <li>Fournir les fonctionnalités du service PropertAI</li>
            <li>Envoyer les rapports d’analyse par email</li>
            <li>Gérer l’accès à l’espace utilisateur et à l’abonnement</li>
            <li>Mesurer l’audience et améliorer l’expérience utilisateur</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">
            4. Destinataires des données
          </h2>
          <p>
            Les données sont exclusivement accessibles par l’éditeur du site et
            certains sous-traitants :
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Supabase</strong> – hébergement de la base de données
            </li>
            <li>
              <strong>Stripe</strong> – gestion des paiements
            </li>
            <li>
              <strong>Resend</strong> – envoi des emails (analyses,
              inscriptions)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">
            5. Conservation des données
          </h2>
          <p>
            Vos données sont conservées aussi longtemps que vous utilisez le
            service, et peuvent être supprimées sur simple demande à l’adresse{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:guillaume.rot@gmail.com"
            >
              guillaume.rot@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">6. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc ml-6">
            <li>Droit d’accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l’effacement (droit à l’oubli)</li>
            <li>Droit d’opposition au traitement</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p>
            Pour exercer ces droits, envoyez un email à :{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:guillaume.rot@gmail.com"
            >
              guillaume.rot@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">7. Sécurité</h2>
          <p>
            Toutes les données sont stockées de manière sécurisée via Supabase.
            Les mots de passe sont chiffrés et les connexions au site sont
            protégées via HTTPS.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">8. Cookies</h2>
          <p>
            Nous utilisons des cookies strictement nécessaires au fonctionnement
            du site, ainsi que des cookies de mesure d’audience (par exemple
            Google Analytics).
          </p>
        </section>

        <p className="text-gray-500 mt-8">Dernière mise à jour : mai 2025</p>
      </main>
      <Footer />
    </div>
  );
}
