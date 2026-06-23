"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function MagneticMenuButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 sm:pt-6 px-4`}
      >
        <motion.div
          className={`flex items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-700 ${
            scrolled
              ? "bg-oled/85 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent"
          }`}
          style={scrolled ? {} : {
            background: "rgba(5,5,5,0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 px-3 py-1.5 text-lg font-bold tracking-tight"
          >
            <Sparkles className="w-4 h-4 text-violet-400 group-hover:text-violet-300 transition-colors" />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              KR
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5 ml-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
                  className={`relative px-3.5 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 rounded-xl ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-xl bg-white/10 border border-white/10"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <MagneticMenuButton onClick={toggleMobile}>
            <button
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute left-0 top-0 w-5 h-[1.5px] bg-current rounded-full"
                  transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="absolute left-0 top-2 w-5 h-[1.5px] bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="absolute left-0 top-4 w-5 h-[1.5px] bg-current rounded-full"
                  transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                />
              </div>
            </button>
          </MagneticMenuButton>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-black/80 md:hidden"
          >
            <nav className="flex flex-col items-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.08 }}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href.slice(1));
                    closeMobile();
                  }}
                  className="text-4xl font-bold text-zinc-400 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
