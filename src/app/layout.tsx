import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TERREDECAFE | Café de bureau à Abidjan",
  description:
    "Fournisseur de services de café de bureau (OCS) à Abidjan. Matériel premium, café d'exception et service expert pour le bonheur de vos équipes.",
  keywords: [
    "café de bureau",
    "OCS",
    "Abidjan",
    "Côte d'Ivoire",
    "machine à café",
    "thé",
    "TERREDECAFE",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
