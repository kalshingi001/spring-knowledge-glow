import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./Section";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  { name: "Mrs. Adaeze Okonkwo", role: "Parent · Primary 4", quote: "My daughter has blossomed at Spring of Knowledge. The teachers know each child personally and the values she's learning here go far beyond the classroom.", initial: "A", color: "from-rose-400 to-amber-300" },
  { name: "Dr. Suleiman Bello", role: "Parent · JSS 2", quote: "We've watched our son grow into a confident, disciplined young man. The school strikes a beautiful balance between academic rigour and character formation.", initial: "S", color: "from-sky-400 to-indigo-400" },
  { name: "Mrs. Ifeoma Eze", role: "Parent · Nursery 2", quote: "From the very first day, my child felt safe and loved. The warmth of the staff and the quality of teaching are simply unmatched in Kubwa.", initial: "I", color: "from-emerald-400 to-teal-400" },
  { name: "Mr. Yusuf Aliyu", role: "Alumni Parent", quote: "Both of my older children passed through this school. Today they are excelling in their senior schools — Spring of Knowledge gave them an unshakeable foundation.", initial: "Y", color: "from-violet-400 to-fuchsia-400" },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % data.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = data[idx];

  return (
    <section className="py-28 bg-gradient-cream">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Words from our <span className="text-gradient-gold">school family</span></>}
        />

        <div className="relative rounded-[2rem] bg-card border border-border p-8 sm:p-14 shadow-elegant overflow-hidden">
          <Quote className="absolute top-6 left-6 h-20 w-20 text-gold/15" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}
              </div>
              <p className="font-display text-2xl sm:text-3xl leading-relaxed text-foreground">
                "{t.quote}"
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-display text-xl font-bold shadow-lg`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2 bg-border"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIdx((i) => (i - 1 + data.length) % data.length)} className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-muted">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setIdx((i) => (i + 1) % data.length)} className="h-10 w-10 rounded-full bg-gradient-royal text-white flex items-center justify-center">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
