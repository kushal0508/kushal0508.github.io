"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EASE_OUT_EXPO } from "@/lib/utils";

function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const letters = "KUSHAL R".split("");

  useEffect(() => {
    const timer = setTimeout(onComplete, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-oled"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
        className="relative flex flex-col items-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.2 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.5em] text-zinc-500"
        >
          Frontend Developer
        </motion.span>

        <h1 className="flex overflow-hidden">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: "120%", opacity: 0, rotateZ: 8 }}
              animate={{ y: "0%", opacity: 1, rotateZ: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4 + index * 0.08,
              }}
              className="inline-block bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: EASE_OUT_EXPO, delay: 0.8 }}
          className="mt-8 h-px w-48 origin-left bg-gradient-to-r from-transparent via-violet-500 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 1.2 }}
          className="mt-6 text-sm text-zinc-600 tracking-wider"
        >
          Crafting premium digital experiences
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-12 flex items-center gap-3"
      >
        <div className="h-1 w-28 overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.6, ease: EASE_OUT_EXPO, delay: 1 }}
            className="h-full w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400"
          />
        </div>
        <span className="text-xs text-zinc-700 font-mono">Loading</span>
      </motion.div>
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[150] h-[2px] origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400"
    />
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setVisible(y > 400);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md text-zinc-400 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <CinematicIntro
            key="intro"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <ScrollProgress />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1, ease: EASE_OUT_EXPO }}
      >
        <Navbar />
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </motion.div>
    </>
  );
}
