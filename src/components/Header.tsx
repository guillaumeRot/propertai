"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-2xl z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo_orange_bleu.png"
            alt="Logo"
            width={200}
            height={200}
            className="ml-2"
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4 relative">
          {!session ? (
            <>
              <Link
                href="/auth/login"
                className="text-sm font-medium text-gray-700 hover:text-orange-600"
              >
                Connexion
              </Link>
              <Link
                href="/auth/register"
                className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium"
              >
                Créer un compte gratuit
              </Link>
            </>
          ) : (
            <>
              {/* Avatar + menu */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="focus:outline-none"
                >
                  <Image
                    src={session.user?.image || "/default-avatar.png"}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-300"
                  />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <Link
                      href="/analyse"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      Nouvelle analyse
                    </Link>
                    <Link
                      href="/mes-analyses"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      Mes analyses
                    </Link>
                    <Link
                      href="/mon-compte"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      Mon compte
                    </Link>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        signOut();
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
