"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Layers, Eye, ArrowUpRight } from "lucide-react";
import { EASE_OUT_EXPO, staggerContainer } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [4, -4]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
      style={{ rotateX, rotateY, perspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}

const featuredProjects = personalInfo.projects.filter((p) => p.link);
const otherProjects = personalInfo.projects.filter((p) => !p.link);

const projectColors: Record<string, string> = {
  "from-amber-500/20 to-rose-500/20": "from-amber-800/60 via-amber-700/40 to-rose-900/60",
  "from-emerald-500/20 to-cyan-500/20": "from-emerald-800/60 via-emerald-700/40 to-cyan-900/60",
  "from-orange-500/20 to-pink-500/20": "from-orange-800/60 via-orange-700/40 to-pink-900/60",
  "from-blue-500/20 to-violet-500/20": "from-blue-800/60 via-blue-700/40 to-violet-900/60",
  "from-green-500/20 to-teal-500/20": "from-green-800/60 via-green-700/40 to-teal-900/60",
};

const projectAccents: Record<string, string> = {
  "from-amber-500/20 to-rose-500/20": "from-amber-400 to-rose-400",
  "from-emerald-500/20 to-cyan-500/20": "from-emerald-400 to-cyan-400",
  "from-orange-500/20 to-pink-500/20": "from-orange-400 to-pink-400",
  "from-blue-500/20 to-violet-500/20": "from-blue-400 to-violet-400",
  "from-green-500/20 to-teal-500/20": "from-green-400 to-teal-400",
};

function FeaturedProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const gradientClass = project.gradient || "from-blue-500/20 to-violet-500/20";
  const bgGradient = projectColors[gradientClass] || "from-blue-800/60 via-blue-700/40 to-violet-900/60";
  const accentGradient = projectAccents[gradientClass] || "from-blue-400 to-violet-400";

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: index * 0.12,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group block"
    >
      <TiltCard>
        <div className="double-bezel overflow-hidden relative">
          <div className={`h-52 bg-gradient-to-br ${bgGradient} relative overflow-hidden`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03), transparent 70%)`,
              }}
            />

            <div className="absolute top-5 left-5">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-zinc-300`}>
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${accentGradient}`} />
                {project.category}
              </div>
            </div>

            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-xs text-white border border-white/10">
                <Eye className="w-3 h-3" />
                <span>Visit Project</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/8 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-zinc-500">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-b from-zinc-900/95 to-zinc-950">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-violet-300 transition-all duration-300">
                {project.title}
              </h4>
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </motion.div>
            </div>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </TiltCard>
    </motion.a>
  );
}

function OtherProjectCard({ project, index }: { project: typeof otherProjects[0]; index: number }) {
  const gradientClass = project.gradient || "from-blue-500/20 to-violet-500/20";
  const accentGradient = projectAccents[gradientClass] || "from-blue-400 to-violet-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className="double-bezel p-6 h-full bg-gradient-to-b from-zinc-900/80 to-zinc-950/80">
        <div
          className={`absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r ${gradientClass} rounded-full opacity-60`}
        />
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradientClass} bg-opacity-20 flex items-center justify-center mb-4`}>
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentGradient}`} />
        </div>
        <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-oled via-zinc-950 to-oled pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Layers className="w-5 h-5 text-violet-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Projects
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <motion.span
              className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
            >
              Projects
            </motion.span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A selection of projects I&apos;ve built &mdash; from production e-commerce
            platforms to internal ERP tools.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {featuredProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <h3 className="text-2xl font-semibold text-white">
                  Featured Projects
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-violet-500/20 to-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>
          )}

          {otherProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <h3 className="text-2xl font-semibold text-white">
                  Other Work
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <OtherProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
