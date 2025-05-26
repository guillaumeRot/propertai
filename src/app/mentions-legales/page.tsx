import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MentionsLegales() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-30 pb-16 text-sm text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Mentions légales
        </h1>

        <section>
          <h2 className="font-semibold text-lg mb-2">Éditeur du site</h2>
          <p>
            Le site <strong>PropertAI</strong> est édité par :
            <br />
            Guillaume Rot – Micro-entreprise
            <br />
            SIRET : 90880954400012
            <br />
            Email : guillaume.rot@gmail.com
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">
            Directeur de la publication
          </h2>
          <p>Guillaume Rot – guillaume.rot@gmail.com</p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">Hébergement</h2>
          <p>
            Le site est hébergé par :
            <br />
            <strong>Vercel Inc.</strong>
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789 – USA
            <br />
            Site :{" "}
            <a href="https://vercel.com" className="text-blue-600 underline">
              https://vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">
            Propriété intellectuelle
          </h2>
          <p>
            L’ensemble des éléments graphiques, textuels et fonctionnels du site
            sont la propriété exclusive de PropertAI. Toute reproduction,
            représentation ou diffusion, même partielle, sans autorisation
            écrite est interdite.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">Responsabilité</h2>
          <p>
            Les informations fournies sur ce site sont à titre informatif.
            PropertAI ne saurait être tenu responsable des erreurs ou omissions,
            ni de l’usage qui pourrait être fait des informations fournies.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">Données personnelles</h2>
          <p>
            Les données collectées (email, prénom, etc.) sont utilisées
            uniquement pour fournir les services du site et ne sont jamais
            revendues. Vous disposez d’un droit d’accès, de rectification et de
            suppression en nous contactant à : guillaume.rot@gmail.com
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">Cookies</h2>
          <p>
            Le site utilise des cookies à des fins de mesure d’audience et
            d’amélioration de l’expérience utilisateur. En poursuivant la
            navigation, vous acceptez l’utilisation de ces cookies.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
