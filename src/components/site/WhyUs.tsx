import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./Section";
import { Users, ShieldCheck, HeartHandshake, Trophy, Sparkles, Laptop } from "lucide-react";

const reasons = [
  { i: Users, t: "Qualified Teachers", d: "Dedicated, certified educators who lead with passion and patience." },
  { i: ShieldCheck, t: "Safe Environment", d: "A secured, monitored campus where every child feels protected." },
  { i: HeartHandshake, t: "Moral Excellence", d: "Character formation rooted in respect, integrity and faith." },
  { i: Trophy, t: "Academic Excellence", d: "A consistent record of strong results and confident graduates." },
  { i: Sparkles, t: "Parent Trust", d: "Three generations of Abuja families have chosen us." },
  { i: Laptop, t: "Modern Learning", d: "Engaging methods, contemporary resources and digital fluency." },
];

const stats = [
  { v: 25, suffix: "+", l: "Years Strong" },
  { v: 1000, suffix: "+", l: "Pupils Taught" },
  { v: 30, suffix: "+", l: "Qualified Staff" },
  { v: 98, suffix: "%", l: "Parent Satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <div ref={ref} className="font-display text-5xl sm:text-6xl font-bold text-gradient-gold">
      {n}{suffix}
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>Six reasons families <span className="text-gradient-gold">trust us</span></>}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((r, i) => {
            const I = r.i;
            return (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-3xl border border-border bg-card p-7 hover-lift overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-gold/10 to-transparent transition" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gold group-hover:text-[oklch(0.22_0.05_75)] transition">
                    <I className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{r.t}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{r.d}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="rounded-3xl bg-gradient-royal p-10 sm:p-14 text-white shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,oklch(0.72_0.13_75/0.35),transparent_55%)]" />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <Counter to={s.v} suffix={s.suffix} />
                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-white/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
