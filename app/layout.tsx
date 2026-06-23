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
      <head>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse-soft {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          @keyframes aurora-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-float-slow { animation: float 6s ease-in-out infinite; }
          .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
          .animate-aurora-spin { animation: aurora-spin 20s linear infinite; }
          .starfield-fallback { background: radial-gradient(ellipse at 50% 50%, rgba(10,10,30,1) 0%, rgba(5,5,5,1) 100%); }
        `}</style>
      </head>
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
