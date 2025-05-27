import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0e1a2b] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image
            src="/logo_orange_bleu.png"
            alt="Logo"
            width={200}
            height={200}
            className="ml-2 mb-4"
          />
          <p className="mt-2 text-gray-400">
            L’intelligence artificielle au service de votre prochain
            investissement.
          </p>
        </div>

        <div>
          <h3 className="uppercase text-gray-400 tracking-wide mb-4">
            Produit
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/fonctionnalites"
                className="hover:underline hover:text-blue-400"
              >
                Fonctionnalités
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline hover:text-blue-400">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/analyse"
                className="hover:underline hover:text-blue-400"
              >
                Analyse gratuite
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase text-gray-400 tracking-wide mb-4">
            Ressources
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/comparatif"
                className="hover:underline hover:text-blue-400"
              >
                Comparatif
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline hover:text-blue-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase text-gray-400 tracking-wide mb-4">Légal</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/mentions-legales"
                className="hover:underline hover:text-blue-400"
              >
                Mentions légales
              </a>
            </li>
            <li>
              <a href="/cgu" className="hover:underline hover:text-blue-400">
                CGU
              </a>
            </li>
            <li>
              <a
                href="/politique-confidentialite"
                className="hover:underline hover:text-blue-400"
              >
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-500">
            © PropertAI 2025. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/propert-ai/"
              className="hover:text-blue-400 transition-opacity opacity-80 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v13H.5zM8.5 8h3.56v1.78h.05c.5-.95 1.75-1.95 3.61-1.95 3.86 0 4.58 2.55 4.58 5.88V21h-4V14.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.43V21h-4V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
