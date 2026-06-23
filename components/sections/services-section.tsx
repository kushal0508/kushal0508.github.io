"use client";

import { motion } from "framer-motion";
import { Sparkles, Code, Palette, Database, Workflow, Smartphone, BarChart3 } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/utils";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive, high-performance websites and web applications built with React, Next.js, and modern frameworks.",
    gradient: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces with pixel-perfect designs, smooth animations, and premium aesthetics.",
    gradient: "from-violet-500 to-purple-500",
    bgGlow: "bg-violet-500/5",
  },
  {
    icon: Database,
    title: "Odoo ERP Solutions",
    description: "Custom Odoo module development, workflow automation, website customization, and Docker deployment.",
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/5",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Streamline operations with automated workflows, custom integrations, and scalable business solutions.",
    gradient: "from-orange-500 to-rose-500",
    bgGlow: "bg-orange-500/5",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first designs that work flawlessly across all devices, from smartphones to large displays.",
    gradient: "from-pink-500 to-rose-500",
    bgGlow: "bg-pink-500/5",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Meta Ads campaigns, lead generation, marketing strategy, and performance analytics for business growth.",
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/5",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-oled via-zinc-950/50 to-oled pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-violet-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Services</span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
            >
              What I Do
            </motion.span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            From concept to deployment, I deliver end-to-end solutions that drive results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 18, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="double-bezel p-8 h-full">
                <div className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-6 shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
