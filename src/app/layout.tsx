import type { Metadata } from "next";
import { Archivo, Archivo_Black, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], display: "swap" });
const archivoBlack = Archivo_Black({ variable: "--font-archivo-black", weight: "400", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ecurie-sept-nord.vercel.app"),
  title: {
    default: "Écurie Sept-Nord — Spécialiste Porsche indépendant en Normandie",
    template: "%s | Écurie Sept-Nord",
  },
  description: "Prototype portfolio Hacker Studio pour un atelier Porsche indépendant fictif en Normandie : diagnostic, préparation route et suivi exigeant.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Écurie Sept-Nord — Prototype atelier Porsche",
    description: "Un site portfolio radical, technique et premium pour une niche automotive haut de gamme.",
    type: "website",
    locale: "fr_FR",
    url: "https://ecurie-sept-nord.vercel.app",
    siteName: "Écurie Sept-Nord",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${archivoBlack.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
