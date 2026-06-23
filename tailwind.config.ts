import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      colors: {
        oled: {
          DEFAULT: "#050505",
          50: "#0a0a0a",
          100: "#0f0f0f",
          200: "#141414",
          300: "#1a1a1a",
        },
        accent: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
          cyan: "#06B6D4",
          purple: "#A855F7",
        },
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(at 20% 20%, rgba(59,130,246,0.15) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(139,92,246,0.12) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(6,182,212,0.10) 0px, transparent 50%)",
        "aurora":
          "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.1) 0deg, rgba(139,92,246,0.1) 120deg, rgba(6,182,212,0.1) 240deg, rgba(59,130,246,0.1) 360deg)",
      },
      animation: {
        "aurora-spin": "aurora-spin 20s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "gradient-x": "gradient-x 5s ease infinite",
        "border-glow": "border-glow 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
      keyframes: {
        "aurora-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "border-glow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
