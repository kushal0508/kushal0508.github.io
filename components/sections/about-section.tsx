"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { EASE_OUT_EXPO, staggerContainer, fadeUpSpring, blurReveal } from "@/lib/utils";
import { personalInfo } from "@/lib/data";
import { CheckCircle, Sparkles, GraduationCap, Award, Code2 } from "lucide-react";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={className}
    >
      <div className="liquid-glass rounded-2xl p-6 h-full transition-all duration-300 premium-shadow hover:premium-shadow-lg">
        {children}
      </div>
    </motion.div>
  );
}

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value) || 0;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, count, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <div className={`text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent`}>
        {value.includes("+") ? (
          <>
            <motion.span>{rounded}</motion.span>+
          </>
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
}

export function AboutSection() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Projects Completed" },
    { value: "3+", label: "Live Client Works" },
    { value: "BCA", label: "Final Year Student" },
  ];

  return (
    <section id="about" className="py-32 relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-oled via-zinc-950 to-oled pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-violet-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">About</span>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
            >
              About Me
            </motion.span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <motion.p
                variants={blurReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-zinc-300 text-lg leading-relaxed"
              >
                {personalInfo.about}
              </motion.p>
              <motion.p
                variants={blurReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-zinc-400 leading-relaxed"
              >
                {personalInfo.aboutExtended}
              </motion.p>

              <motion.div
                variants={staggerContainer(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3 pt-4"
              >
                <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                  <Award className="w-4 h-4 text-violet-400" />
                  Achievements
                </h3>
                {personalInfo.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUpSpring}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span className="text-zinc-400 text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                viewport={{ once: true }}
              >
                <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  Education
                </h3>
                <div className="space-y-4">
                  {personalInfo.education.map((edu, i) => (
                    <TiltCard key={i}>
                      <p className="text-white font-semibold">{edu.degree}</p>
                      <p className="text-zinc-400 text-sm mt-1">{edu.institution}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-xs mt-2">{edu.description}</p>
                    </TiltCard>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT_EXPO }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, i) => (
                    <TiltCard key={i}>
                      <div className="text-center">
                        <AnimatedCounter value={stat.value} />
                        <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT_EXPO }}
                viewport={{ once: true }}
              >
                <TiltCard>
                  <div className="flex items-center gap-3 mb-3">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Currently</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {personalInfo.experience.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {personalInfo.experience.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
