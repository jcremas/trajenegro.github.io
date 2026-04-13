"use client";

import { motion } from "framer-motion";

const asmrEase = [0.25, 0.1, 0.25, 1] as const;

export function BlackTransition() {
  return (
    <section className="relative h-[60dvh] bg-background overflow-hidden flex items-center justify-center">
      {/* Subtle breathing radial glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 3, ease: asmrEase }}
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, hsl(var(--gold) / 0.06) 0%, transparent 60%)`,
        }}
      />
      {/* Tiny breathing dot */}
      <motion.div
        className="w-1 h-1 rounded-full bg-gold asmr-breathe-slow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2, ease: asmrEase }}
      />
    </section>
  );
}
