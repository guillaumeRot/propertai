import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CGUPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-30 pb-16 text-sm text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Conditions Générales d’Utilisation
        </h1>

        <section>
          <h2 className="font-semibold text-lg mb-2">1. Objet</h2>
          <p>
            Les présentes conditions générales d’utilisation (CGU) ont pour
            objet de définir les modalités d’accès et d’utilisation du site{" "}
            <strong>propertai.fr</strong>, édité par Guillaume Rot.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">2. Services proposés</h2>
          <p>
            PropertAI est une plateforme qui permet d’analyser des annonces
            immobilières grâce à l’intelligence artificielle, afin de fournir
            des estimations, des recommandations fiscales, des rapports PDF, et
            des conseils sur la rentabilité locative.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">3. Accès au service</h2>
          <p>
            L’accès à certaines fonctionnalités nécessite la création d’un
            compte utilisateur. L’utilisateur s’engage à fournir des
            informations exactes et à les mettre à jour en cas de modification.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">4. Tarifs</h2>
          <p>
            L’accès à PropertAI est gratuit pour les utilisateurs en phase de
            bêta-test. Certaines fonctionnalités peuvent devenir payantes, avec
            ou sans engagement, conformément aux tarifs indiqués sur le site.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">
            5. Propriété intellectuelle
          </h2>
          <p>
            Le contenu, les interfaces et les fonctionnalités de PropertAI sont
            protégés par le droit de la propriété intellectuelle. Toute
            reproduction non autorisée est interdite.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">6. Responsabilités</h2>
          <p>
            L’utilisateur reconnaît que les analyses fournies par PropertAI sont
            générées à partir d’algorithmes et de données publiques, et n’ont
            pas valeur de conseil juridique ou fiscal. L’éditeur ne pourra être
            tenu responsable des décisions prises par l’utilisateur à partir des
            résultats fournis.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">
            7. Données personnelles
          </h2>
          <p>
            PropertAI collecte uniquement les données strictement nécessaires à
            l’usage du service. Ces données ne sont jamais revendues.
            L’utilisateur peut exercer ses droits (accès, suppression,
            modification) à l’adresse : guillaume.rot@gmail.com
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">
            8. Modifications des CGU
          </h2>
          <p>
            PropertAI se réserve le droit de modifier les présentes conditions à
            tout moment. Les utilisateurs seront notifiés des changements par
            email ou lors de leur prochaine connexion.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">9. Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige,
            les tribunaux compétents seront ceux de Rennes, sauf disposition
            légale contraire.
          </p>
        </section>

        <p className="text-gray-500 mt-8">Dernière mise à jour : mai 2025</p>
      </main>
      <Footer />
    </div>
  );
}
