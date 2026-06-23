"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
} from "framer-motion";
import { Download, Mail, Layers, ChevronDown } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

function handleScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function MagneticButton({ children }: { children: React.ReactNode }) {
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
    >
      {children}
    </motion.div>
  );
}

function AnimatedGradientMesh() {
  const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-[0.15]"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(139,92,246,0.3) 0deg, rgba(59,130,246,0.2) 90deg, rgba(6,182,212,0.2) 180deg, rgba(139,92,246,0.3) 270deg, rgba(59,130,246,0.2) 360deg)",
          willChange: "transform",
        }}
        animate={isTouch ? {} : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-oled via-oled/80 to-oled" />
      <div className="absolute inset-0 bg-grid-subtle opacity-20" />
    </div>
  );
}

function FloatingParticles({ count = 30 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted || isTouch) return null;

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
    color: ["rgba(139,92,246,0.3)", "rgba(59,130,246,0.2)", "rgba(6,182,212,0.2)", "rgba(255,255,255,0.1)"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.x > 50 ? -10 : 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onScroll = () => { if (window.scrollY > window.innerHeight * 0.15) setHidden(true); };
    window.addEventListener("scroll", onScroll, { passive: true, once: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden) return null;

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow">
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-4 h-4 text-zinc-500" />
      </motion.div>
    </div>
  );
}

function GlowingOrbs() {
  const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouch) return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-blue-500/10 blur-[120px]" />
    </div>
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet-500/10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-blue-500/10 blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AnimatedGradientMesh />
      <FloatingParticles count={40} />
      <GlowingOrbs />

      <div className="max-w-6xl mx-auto w-full z-10 pt-28">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="text-sm text-zinc-500 font-mono tracking-wide mb-6"
          >
            {personalInfo.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[8rem] font-bold leading-[0.85] mb-6 tracking-tighter"
          >
            <span className="text-gradient-premium inline-block">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT_EXPO }}
            className="text-lg sm:text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto mb-3 font-light tracking-wide"
          >
            {personalInfo.experience.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT_EXPO }}
            className="text-base text-zinc-600 max-w-xl mx-auto mb-14 leading-relaxed"
          >
            Building responsive websites and practical ERP solutions with creativity and functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE_OUT_EXPO }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleScrollTo("projects")}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/45 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]" />
                <Layers className="w-4 h-4" />
                <span>View Projects</span>
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </MagneticButton>

            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleScrollTo("contact")}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition-all duration-300 overflow-hidden backdrop-blur-sm"
              >
                <span className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </motion.button>
            </MagneticButton>

            <MagneticButton>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={personalInfo.resume || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/45 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]" />
                <Download className="w-4 h-4" />
                <span>Resume</span>
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </span>
              </motion.a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
