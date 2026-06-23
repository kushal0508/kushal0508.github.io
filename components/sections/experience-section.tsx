"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { EASE_OUT_EXPO, fadeUpSpring } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

const experiences = [
  {
    title: personalInfo.experience.role,
    company: personalInfo.experience.company,
    duration: personalInfo.experience.period,
    location: personalInfo.experience.location,
    summary: personalInfo.experience.summary,
    contributions: personalInfo.experience.contributions,
    technologies: personalInfo.experience.technologies,
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2024 \u2013 Present",
    location: "Mysuru, India",
    summary:
      "Built and managed responsive websites for businesses, focusing on frontend development, client requirements, and practical digital solutions.",
    contributions: [
      "Built and managed responsive websites for businesses",
      "Focused on frontend development and client requirements",
      "Delivered practical digital solutions on time",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Netlify"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-oled via-zinc-950 to-oled pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.05),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-violet-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Experience
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            <motion.span
              className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
            >
              Experience
            </motion.span>
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.title}-${exp.company}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: EASE_OUT_EXPO }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative pl-0 md:pl-20"
                >
                  <div className="absolute left-[-4px] md:left-[26px] top-1 w-3 h-3 rounded-full bg-violet-500 border-2 border-oled z-10">
                    <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-30" />
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="liquid-glass rounded-2xl p-6 md:p-8 ml-4 md:ml-0"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-violet-400 text-sm font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="flex flex-col gap-1 items-start md:items-end shrink-0">
                        <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-500">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {exp.summary && (
                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{exp.summary}</p>
                    )}

                    <ul className="space-y-2 mb-4">
                      {exp.contributions.map((item, i) => (
                        <motion.li
                          key={i}
                          variants={fadeUpSpring}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-zinc-400 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50 mt-1.5 shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-violet-500/5 border border-violet-500/10 text-violet-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
