"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-2xl z-50 border-b border-gray-100 transform transition-transform duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo_orange_bleu.png"
              alt="Logo"
              width={200}
              height={200}
              className="ml-2"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
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
                className="text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-full"
              >
                Inscription
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600">
                Bonjour {session.user?.name || session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="text-sm text-gray-500 hover:text-red-500 transition"
              >
                Déconnexion
              </button>
            </>
          )}
          <Link
            href="/beta"
            className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium"
          >
            Devenir beta-testeur gratuitement
          </Link>
        </div>
      </div>
    </header>
  );
}
