import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { MapPin, Phone, Mail, Facebook, Instagram, Music } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title={<>We'd love to <span className="text-gradient-gold">hear from you</span></>}
          intro="Visit our campus, give us a call or drop us a note — our doors and hearts are open."
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-3xl bg-card border border-border p-7 hover-lift">
            <MapPin className="h-9 w-9 text-gold" />
            <h3 className="mt-5 font-display text-xl font-semibold">Visit Us</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">No 2, Tony Limba Crescent,<br />Gbazango, Kubwa, Abuja.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-card border border-border p-7 hover-lift">
            <Phone className="h-9 w-9 text-gold" />
            <h3 className="mt-5 font-display text-xl font-semibold">Call Us</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {["+234 803 613 1258", "+234 906 444 6293", "+234 803 586 6471"].map((p) => (
                <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary transition">{p}</a></li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-card border border-border p-7 hover-lift">
            <Mail className="h-9 w-9 text-gold" />
            <h3 className="mt-5 font-display text-xl font-semibold">Email & Social</h3>
            <a href="mailto:springokis@gmail.com" className="block mt-2 text-sm text-muted-foreground hover:text-primary transition">springokis@gmail.com</a>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-muted hover:bg-gradient-gold hover:text-[oklch(0.22_0.05_75)] flex items-center justify-center transition"><Facebook className="h-4 w-4" /></a>
              <a href="https://instagram.com/springokis" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-muted hover:bg-gradient-gold hover:text-[oklch(0.22_0.05_75)] flex items-center justify-center transition"><Instagram className="h-4 w-4" /></a>
              <a href="https://tiktok.com/@springokis" target="_blank" rel="noreferrer" aria-label="TikTok" className="h-10 w-10 rounded-full bg-muted hover:bg-gradient-gold hover:text-[oklch(0.22_0.05_75)] flex items-center justify-center transition"><Music className="h-4 w-4" /></a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden border border-border shadow-soft">
          <div className="aspect-[16/7] w-full bg-muted">
            <iframe
              title="Spring of Knowledge International School location"
              className="w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Gbazango+Kubwa+Abuja&output=embed"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
