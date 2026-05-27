import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Baby, Blocks, Pencil, BookOpen, FlaskConical, GraduationCap, ArrowUpRight, Sparkles, Calculator, BookText } from "lucide-react";

const programs = [
  { name: "Play Group", age: "Ages 2–3", icon: Baby, color: "from-rose-400 to-amber-300", desc: "A warm, playful introduction to learning through songs, stories and sensory discovery." },
  { name: "Nursery", age: "Ages 3–5", icon: Blocks, color: "from-amber-400 to-orange-400", desc: "Foundational literacy, numeracy and social skills in a nurturing, joyful environment." },
  { name: "Primary", age: "Grades 1–6", icon: Pencil, color: "from-emerald-400 to-teal-400", desc: "A rigorous core curriculum balancing academics, creativity, sport and character formation." },
  { name: "JSS 1", age: "Year 7", icon: BookOpen, color: "from-sky-400 to-indigo-400", desc: "Transition to secondary education with mentorship, study skills and broadened sciences." },
  { name: "JSS 2", age: "Year 8", icon: FlaskConical, color: "from-violet-400 to-fuchsia-400", desc: "Deeper exploration of STEM, languages, arts and leadership opportunities." },
  { name: "JSS 3", age: "Year 9", icon: GraduationCap, color: "from-amber-500 to-yellow-400", desc: "BECE preparation, career guidance and a polished launchpad into senior secondary." },
];

const services = [
  { i: BookText, t: "Literacy & Numeracy", d: "Daily structured teaching of reading, writing and mathematical thinking." },
  { i: Calculator, t: "STEM Foundation", d: "Strong grounding in Science, Mathematics and English from the earliest years." },
  { i: Sparkles, t: "Extra-Curricular", d: "Music, sports, debate, arts and cultural clubs to develop the whole child." },
  { i: BookOpen, t: "Books & Materials", d: "Curated educational books and learning resources provided in-house." },
];

export function Academics() {
  return (
    <section id="academics" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Academic Programs"
          title={<>Pathways crafted for every <span className="text-gradient-gold">stage of childhood</span></>}
          intro="From the first wobble of curiosity to the confident stride into secondary school — our six programs are designed to inspire."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 hover-lift"
              >
                <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
                <div className="relative">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.age}</div>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                  <a href="#admissions" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent transition">
                    Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Services */}
        <div className="mt-24">
          <SectionHeader
            eyebrow="What We Offer"
            title={<>Services that shape <span className="text-gradient-gold">excellent learners</span></>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => {
              const I = s.i;
              return (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-3xl bg-gradient-royal text-white p-6 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.13_75/0.3),transparent_60%)] opacity-0 group-hover:opacity-100 transition" />
                  <I className="h-8 w-8 text-gold" />
                  <h4 className="mt-5 font-display text-xl font-semibold">{s.t}</h4>
                  <p className="mt-2 text-sm text-white/80">{s.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
