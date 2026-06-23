import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { GlobalEffects } from "@/components/effects/global-effects";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kushal R — Frontend Developer & UI/UX Designer",
    template: "%s — Kushal R",
  },
  description:
    "Portfolio of Kushal R — a passionate frontend developer and UI/UX designer crafting premium digital experiences with modern web technologies.",
  keywords: [
    "Kushal R",
    "Kushal",
    "Frontend Developer",
    "UI/UX Designer",
    "Odoo Developer",
    "MCA Student",
    "Mysore",
    "Portfolio",
  ],
  authors: [{ name: "Kushal R" }],
  openGraph: {
    title: "Kushal R — Frontend Developer & UI/UX Designer",
    description:
      "Crafting premium digital experiences with modern web technologies.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-oled text-zinc-100 antialiased selection:bg-violet-500/30 selection:text-white`}
      >
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('contextmenu', e => e.preventDefault());
            document.addEventListener('keydown', e => {
              const k = e.key.toLowerCase();
              if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (k === 'i' || k === 'c' || k === 'j')) || (e.ctrlKey && k === 'u')) {
                e.preventDefault();
              }
            });
          `
        }} />
        <GlobalEffects />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
