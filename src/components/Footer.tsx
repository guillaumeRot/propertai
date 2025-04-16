export default function Footer() {
  return (
    <footer className="bg-[#0e1a2b] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-blue-300">PropertAI</h2>
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
              <a href="#" className="hover:underline hover:text-blue-400">
                Fonctionnalités
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
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
              <a href="#" className="hover:underline hover:text-blue-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Comparatif
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase text-gray-400 tracking-wide mb-4">Légal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                CGU
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
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
              href="#"
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
            <a
              href="#"
              className="hover:text-blue-400 transition-opacity opacity-80 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.38 8.62 8.62 0 01-2.72 1.04A4.29 4.29 0 0015.5 4c-2.4 0-4.36 1.95-4.36 4.36 0 .34.04.68.11 1C7.69 9.2 4.85 7.54 2.98 5.02a4.36 4.36 0 00-.59 2.2c0 1.52.77 2.86 1.93 3.65a4.3 4.3 0 01-1.98-.55v.06c0 2.12 1.51 3.89 3.5 4.29a4.3 4.3 0 01-1.97.08c.56 1.74 2.2 3 4.14 3.04a8.63 8.63 0 01-5.34 1.84c-.35 0-.7-.02-1.05-.06a12.17 12.17 0 006.57 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.7 8.7 0 0024 4.59a8.56 8.56 0 01-2.54.7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
