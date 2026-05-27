import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, intro, light = false }: { eyebrow: string; title: ReactNode; intro?: string; light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <div className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] ${light ? "text-gold" : "text-accent-foreground/70"}`}>
        <span className="h-px w-8 bg-gold" /> {eyebrow} <span className="h-px w-8 bg-gold" />
      </div>
      <h2 className={`mt-5 font-display text-4xl sm:text-5xl font-bold leading-tight ${light ? "text-white" : "text-foreground"}`}>{title}</h2>
      {intro && <p className={`mt-5 text-base sm:text-lg ${light ? "text-white/80" : "text-muted-foreground"}`}>{intro}</p>}
    </motion.div>
  );
}
