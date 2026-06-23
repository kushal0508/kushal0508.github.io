"use client";

import { Heart, Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "@/lib/data";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent via-zinc-950/50 to-oled">
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-xl font-bold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                KUSHAL R
              </span>
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Frontend developer & UI/UX designer crafting premium digital experiences with modern web technologies.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">Quick Links</p>
            <div className="space-y-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-zinc-500 hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">Connect</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-zinc-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-zinc-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-zinc-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all"
                  aria-label="Resume"
                >
                  <FileText className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            &copy; {currentYear} Kushal R. Built with{" "}
            <Heart className="inline-block w-3 h-3 text-red-400 fill-red-400 align-middle" />{" "}
            using Next.js & Tailwind CSS
          </p>
          <p className="text-zinc-700 text-xs">
            Crafting premium digital experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
