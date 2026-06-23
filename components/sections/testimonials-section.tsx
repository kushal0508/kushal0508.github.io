"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/utils";

const testimonials = [
  {
    quote: "Kushal delivered the website requirements with good attention to detail and maintained proper communication throughout the project.",
    author: "Client Project",
    role: "Feedback",
    rating: 5,
    gradient: "from-blue-500 to-violet-500",
  },
  {
    quote: "His work on Odoo customization and website setup showed strong learning ability and practical implementation skills.",
    author: "Internship Mentor",
    role: "Feedback",
    rating: 5,
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    quote: "The website design was clean, responsive, and aligned with our business needs. Good work overall.",
    author: "Freelance Client",
    role: "Feedback",
    rating: 5,
    gradient: "from-orange-500 to-rose-500",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-oled via-zinc-950/30 to-oled pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="w-5 h-5 text-violet-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Testimonials</span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
            >
              Kind Words
            </motion.span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            What clients say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 18, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="double-bezel p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-violet-500/20 mb-4" />

                <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.author}</p>
                    <p className="text-xs text-zinc-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
