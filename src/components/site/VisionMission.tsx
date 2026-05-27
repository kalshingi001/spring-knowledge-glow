import { motion } from "framer-motion";
import { Eye, Target, Heart, BookOpen, Compass } from "lucide-react";
import logo from "@/assets/logo.png";

export function VisionMission() {
  return (
    <section className="relative py-28 overflow-hidden bg-[oklch(0.18_0.05_268)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.36_0.16_268/0.6),transparent_55%),radial-gradient(circle_at_75%_80%,oklch(0.72_0.13_75/0.25),transparent_55%)]" />
      {/* particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/50"
            style={{ left: `${(i * 41) % 100}%`, top: `${(i * 23) % 100}%` }}
            animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.6, 1] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-gold/30 bg-white/5 backdrop-blur-md p-10 shadow-elegant overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/15 blur-3xl" />
          <Eye className="h-10 w-10 text-gold" />
          <div className="mt-6 text-xs uppercase tracking-[0.32em] text-gold">Our Vision</div>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
            To illuminate young minds through knowledge, character and faith.
          </h3>
          <p className="mt-6 text-white/80 leading-relaxed">
            To train and inculcate values that illuminate the minds of pupils and students
            while grooming individuals from diverse backgrounds through dedication to studies,
            character building, and the search for God.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-3xl border border-gold/30 bg-white/5 backdrop-blur-md p-10 shadow-elegant overflow-hidden"
        >
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/40 blur-3xl" />
          <Target className="h-10 w-10 text-gold" />
          <div className="mt-6 text-xs uppercase tracking-[0.32em] text-gold">Our Mission</div>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
            To mentor morally balanced and intellectually motivated young leaders.
          </h3>
          <p className="mt-6 text-white/80 leading-relaxed">
            To mentor and form morally balanced and intellectually motivated young men and women
            who will meaningfully contribute to society, Nigeria, and the world at large.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { i: Heart, l: "Character" },
              { i: BookOpen, l: "Knowledge" },
              { i: Compass, l: "Leadership" },
            ].map(({ i: I, l }) => (
              <div key={l} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center hover:bg-gold/15 transition">
                <I className="mx-auto h-5 w-5 text-gold" />
                <div className="mt-2 text-xs uppercase tracking-widest text-white/80">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.img
        src={logo}
        alt=""
        aria-hidden
        className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 opacity-10 animate-float"
      />
    </section>
  );
}
