import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClickSound from "@/components/ClickSound";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://opulentia-digital.vercel.app";
const description =
  "Opulentia Digital Core Horizon (RC-9802444) — the intelligent coordination layer for Africa's distributed-energy infrastructure. Flagship platform: AetherGrid. Second product: AgentProof, an assurance and reproducibility ledger for AI-agent outputs.";

export const metadata: Metadata = {
  title: "Opulentia Digital Core Horizon",
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Opulentia Digital Core Horizon",
    description,
    url: siteUrl,
    siteName: "Opulentia Digital Core Horizon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opulentia Digital Core Horizon",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ClickSound />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
