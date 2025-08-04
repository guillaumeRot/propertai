import { HotJar } from "@/components/Hotjar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "PropertAI - L'intelligence artificielle au service des professionnels de l'immobilier",
  description:
    "Trouvez le bien idéal pour vos clients en quelques secondes grâce à l'IA. Analyse automatique des critères, sélection intelligente d'annonces et suggestions de valorisation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="fe1b8ae3-4767-460a-a0f4-846f4e9f98a8"
        ></script>
        <HotJar />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
