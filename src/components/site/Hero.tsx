import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Phone, Images } from "lucide-react";
import hero from "@/assets/hero.jpg";
import proprietor from "@/assets/proprietor.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,oklch(0.14_0.03_268/0.6)_100%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-foreground border border-gold/40"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-white/90">Established 1999 · Kubwa, Abuja</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Raising future leaders through{" "}
            <span className="relative">
              <span className="text-gradient-gold">knowledge, character</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            and excellence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed"
          >
            Spring of Knowledge International School provides world-class education that nurtures
            intellectual growth, moral values, leadership, discipline, and academic excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#admissions" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-[oklch(0.22_0.05_75)] shadow-gold hover:scale-[1.04] transition">
              Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/25 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition">
              <Phone className="h-4 w-4" /> Contact Us
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white/90 hover:text-gold transition">
              <Images className="h-4 w-4" /> Explore Gallery
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-14 flex gap-8 text-white/80"
          >
            {[
              { n: "25+", l: "Years of Excellence" },
              { n: "6", l: "Academic Programs" },
              { n: "1000+", l: "Proud Alumni" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient-gold">{s.n}</div>
                <div className="text-xs uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Proprietor card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="lg:col-span-5 relative mx-auto w-full max-w-md"
        >
          <div className="relative rounded-[2rem] bg-white/10 glass-dark border border-white/20 p-6 shadow-elegant">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-transparent pointer-events-none" />
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img src={proprietor} alt="Mrs. Titilayo Christiana Onyia, Proprietor" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Proprietor & Founder</div>
                <div className="font-display text-xl font-semibold mt-1">Mrs. Titilayo Christiana Onyia</div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gold/40" />
              <div className="text-xs italic text-white/80 font-display">"Knowledge is Light"</div>
              <div className="h-px flex-1 bg-gold/40" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-[10px] uppercase tracking-[0.3em]"
      >
        Scroll
      </motion.div>
    </section>
  );
}
