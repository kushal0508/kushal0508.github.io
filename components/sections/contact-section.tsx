"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Phone, MessageSquare } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    gradient: "from-blue-500 to-blue-600",
    border: "border-blue-500/20 hover:border-blue-500/40",
    bg: "bg-blue-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    gradient: "from-emerald-500 to-emerald-600",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    bg: "bg-emerald-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    gradient: "from-violet-500 to-violet-600",
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kushal0508",
    href: personalInfo.github,
    gradient: "from-zinc-400 to-zinc-500",
    border: "border-white/10 hover:border-white/30",
    bg: "bg-white/5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kushal-r",
    href: personalInfo.linkedin,
    gradient: "from-blue-600 to-blue-700",
    border: "border-blue-600/20 hover:border-blue-500/40",
    bg: "bg-blue-600/10",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-oled via-zinc-950 to-oled pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.06),transparent_60%),radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 text-violet-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Contact</span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
            >
              Get In Touch
            </motion.span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 18, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group flex flex-col items-center text-center gap-3 px-5 py-6 rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md transition-all duration-300 ${method.border} ${method.href ? "cursor-pointer" : ""}`}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${method.bg}`}>
                  <method.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">{method.label}</p>
                  <p className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors break-all">{method.value}</p>
                </div>
              </motion.div>
            );

            if (method.href) {
              return (
                <a key={method.label} href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              );
            }
            return <div key={method.label}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
