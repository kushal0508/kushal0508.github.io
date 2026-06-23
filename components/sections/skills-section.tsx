"use client";

import { motion } from "framer-motion";
import {
  Sparkles, Zap, FileCode, Palette, Code2, FileType, Wind, Smartphone,
  Atom, Grid3X3, Move3D, GitBranch, Github, Container, Cloud, Database,
  Layout, TrendingUp, Target, Workflow,
} from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/utils";
import { personalInfo } from "@/lib/data";
import { TechMarquee } from "@/components/ui/tech-marquee";

const categoryGradients: Record<string, string> = {
  frontend: "from-blue-500/20 to-violet-500/20",
  frameworks: "from-emerald-500/20 to-cyan-500/20",
  tools: "from-orange-500/20 to-rose-500/20",
  other: "from-violet-500/20 to-purple-500/20",
};

const iconMap: Record<string, React.ElementType> = {
  FileCode, Palette, Code2, FileType, Wind, Smartphone,
  Atom, Grid3X3, Move3D, GitBranch, Github, Container, Cloud, Database,
  Layout, TrendingUp, Target, Workflow,
};

export function SkillsSection() {
  const categories = Object.entries(personalInfo.skills);

  return (
    <section id="skills" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-oled via-zinc-950 to-oled pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-5 h-5 text-violet-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Skills
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>

          <motion.h2 className="text-5xl md:text-6xl font-bold mb-6">
            <motion.span
              className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
            >
              Skills &amp; Expertise
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit for building premium digital experiences with cutting-edge technologies.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {categories.map(([key, category]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-xl font-semibold text-white">{category.label}</h3>
                <div className={`h-px flex-1 bg-gradient-to-r ${categoryGradients[key] || "from-white/10 to-transparent"}`} />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 18,
                      delay: index * 0.06,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 200, damping: 15 },
                    }}
                    className="group relative p-6 rounded-2xl liquid-glass overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[key] || "from-white/5 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-violet-500/10 transition-colors">
                          {skill.icon && iconMap[skill.icon] ? (
                            (() => {
                              const Icon = iconMap[skill.icon];
                              return <Icon className="w-4 h-4 text-zinc-400 group-hover:text-violet-400 transition-colors" />;
                            })()
                          ) : null}
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                          <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-xs font-mono text-zinc-500">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.08, ease: EASE_OUT_EXPO }}
                          viewport={{ once: true }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 shadow-lg group-hover:shadow-blue-500/30 transition-shadow duration-300"
                        />
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-zinc-600 text-sm flex items-center justify-center gap-2"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Hover over any skill to see details
          </motion.p>
        </motion.div>

        <div className="mt-20 pt-12 border-t border-white/5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 text-center mb-6">
            Technologies I Work With
          </p>
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}
