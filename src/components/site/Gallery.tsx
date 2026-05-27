import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./Section";
import { X } from "lucide-react";
import awards from "@/assets/gallery/awards.jpg";
import classroom from "@/assets/gallery/classroom.jpg";
import excursion from "@/assets/gallery/excursion.jpg";
import graduation from "@/assets/gallery/graduation.jpg";
import students from "@/assets/gallery/students.jpg";
import proprietor from "@/assets/proprietor.jpg";

type Cat = "All" | "Awards" | "Classroom" | "Excursion" | "Graduation" | "Students" | "Proprietor";

const items: { src: string; cat: Exclude<Cat, "All">; caption: string }[] = [
  { src: awards, cat: "Awards", caption: "Excellence recognised" },
  { src: classroom, cat: "Classroom", caption: "Learning in action" },
  { src: excursion, cat: "Excursion", caption: "Discovery beyond the gates" },
  { src: graduation, cat: "Graduation", caption: "A proud milestone" },
  { src: students, cat: "Students", caption: "Our shining stars" },
  { src: proprietor, cat: "Proprietor", caption: "Mrs. Titilayo Christiana Onyia" },
];

const cats: Cat[] = ["All", "Awards", "Classroom", "Excursion", "Graduation", "Students", "Proprietor"];

export function Gallery() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(() => (active === "All" ? items : items.filter((i) => i.cat === active)), [active]);

  return (
    <section id="gallery" className="py-28 bg-gradient-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title={<>Moments that <span className="text-gradient-gold">tell our story</span></>}
          intro="Glimpses of life, learning and joy at Spring of Knowledge."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                active === c
                  ? "bg-gradient-royal text-white shadow-soft"
                  : "bg-card text-foreground/70 border border-border hover:border-gold hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.button
                layout
                key={it.src + it.cat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(it.src)}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-soft hover-lift focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <img src={it.src} alt={it.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-deep/85 via-royal-deep/10 to-transparent opacity-90 group-hover:opacity-100 transition" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.cat}</div>
                  <div className="font-display text-lg font-semibold">{it.caption}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-royal-deep/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              src={lightbox} alt="" className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-elegant"
            />
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 h-12 w-12 rounded-full glass-dark text-white flex items-center justify-center hover:bg-white/20" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
