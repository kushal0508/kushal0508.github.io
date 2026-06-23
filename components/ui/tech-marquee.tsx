"use client";

import { motion } from "framer-motion";

const techItems = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "Framer Motion", "Three.js", "Node.js", "Python", "Docker",
  "Odoo ERP", "Git", "PostgreSQL", "REST APIs", "GraphQL",
  "Figma", "Responsive Design", "UI/UX", "WebGL", "GSAP",
];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-8 mask-fade-edges">
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...techItems, ...techItems].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-sm font-medium text-zinc-600 whitespace-nowrap hover:text-violet-400 transition-colors"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
