import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./Section";

const faqs = [
  { q: "What age groups do you accept?", a: "We welcome children from age 2 (Play Group) through JSS 3 (Year 9)." },
  { q: "Where is the school located?", a: "No 2, Tony Limba Crescent, Gbazango, Kubwa, Abuja — easily accessible with safe drop-off and pick-up." },
  { q: "What is the school's medium of instruction?", a: "Instruction is in English, with foundational Nigerian languages and cultural studies integrated." },
  { q: "How can I begin the admissions process?", a: "Submit the inquiry form above or chat with us on WhatsApp — our team will guide you step by step." },
  { q: "Do you offer extra-curricular activities?", a: "Yes — sports, music, debate, arts, ICT and excursions are core parts of our calendar." },
  { q: "Is the school officially registered?", a: "Yes, incorporated with CAC since February 2007 (RC 682911) and approved by educational authorities." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title={<>Questions, <span className="text-gradient-gold">answered</span></>} />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-display text-lg font-semibold pr-4">{f.q}</span>
                  <span className={`h-9 w-9 shrink-0 rounded-full bg-muted flex items-center justify-center transition-transform ${isOpen ? "rotate-45 bg-gradient-gold text-[oklch(0.22_0.05_75)]" : ""}`}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
