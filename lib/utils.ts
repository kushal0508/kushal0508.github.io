import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.83, 0, 0.17, 1] as const;
export const EASE_OUT_CIRC = [0.08, 0.82, 0.17, 1] as const;
export const EASE_IN_OUT_QUART = [0.76, 0, 0.24, 1] as const;

export const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const springGentle = {
  type: "spring" as const,
  stiffness: 60,
  damping: 15,
  mass: 0.8,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
  mass: 0.5,
};

export const staggerContainer = (stagger: number, delay: number = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export const fadeUpSpring = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 18, mass: 0.8 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export const blurReveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

export function throttle<T extends (...args: unknown[]) => void>(fn: T, ms: number): T {
  let last = 0;
  return ((...args: unknown[]) => {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      fn(...args);
    }
  }) as T;
}

export const scaleInSpring = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18, mass: 0.6 },
  },
};
