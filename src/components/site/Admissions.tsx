import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { ClipboardList, FileText, UserCheck, GraduationCap, CalendarDays, Send } from "lucide-react";
import { toast } from "sonner";

const steps = [
  { i: ClipboardList, t: "Inquire", d: "Tell us a little about your child using the form or a quick call." },
  { i: FileText, t: "Submit Forms", d: "Complete the application and submit required documents." },
  { i: UserCheck, t: "Assessment", d: "Brief age-appropriate interaction and parent meeting." },
  { i: GraduationCap, t: "Enrol", d: "Receive your offer, complete payment and join the family." },
];

const calendar = [
  { term: "First Term", dates: "Sep 9, 2025 — Dec 12, 2025" },
  { term: "Second Term", dates: "Jan 6, 2026 — Apr 3, 2026" },
  { term: "Third Term", dates: "Apr 27, 2026 — Jul 24, 2026" },
];

export function Admissions() {
  const [busy, setBusy] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    if (!name || name.length > 100 || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid name and email.");
      return;
    }
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! Our admissions team will be in touch shortly.");
    }, 900);
  };

  return (
    <section id="admissions" className="py-28 bg-gradient-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Admissions"
          title={<>A simple path to <span className="text-gradient-gold">joining our family</span></>}
          intro="Admissions are open for the new academic session. Begin your child's journey in four warm and welcoming steps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {steps.map((s, i) => {
            const I = s.i;
            return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-3xl bg-card border border-border p-7 hover-lift"
              >
                <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-gradient-gold text-[oklch(0.22_0.05_75)] flex items-center justify-center font-display font-bold shadow-gold">
                  {i + 1}
                </div>
                <I className="h-8 w-8 text-primary" />
                <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inquiry form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-card border border-border p-8 shadow-soft"
          >
            <h3 className="font-display text-2xl font-semibold">Parent Inquiry</h3>
            <p className="text-sm text-muted-foreground mt-1">We'll respond within one business day.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Parent name</label>
                <input name="name" required maxLength={100} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input name="email" type="email" required maxLength={255} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                <input name="phone" maxLength={30} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Child's age</label>
                <input name="age" maxLength={20} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Class of interest</label>
                <select name="class" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
                  <option>Play Group</option><option>Nursery</option><option>Primary</option>
                  <option>JSS 1</option><option>JSS 2</option><option>JSS 3</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea name="message" rows={4} maxLength={1000} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
            </div>
            <button disabled={busy} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-royal px-7 py-3.5 text-sm font-semibold text-white shadow-elegant hover:scale-[1.02] transition disabled:opacity-60">
              <Send className="h-4 w-4" /> {busy ? "Sending..." : "Send Inquiry"}
            </button>
          </motion.form>

          {/* Calendar preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-gradient-royal text-white p-8 shadow-elegant relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.13_75/0.3),transparent_60%)]" />
            <CalendarDays className="h-10 w-10 text-gold" />
            <h3 className="mt-4 font-display text-2xl font-semibold">Academic Calendar 2025/26</h3>
            <p className="text-sm text-white/80 mt-1">Key term dates at a glance.</p>
            <div className="mt-8 space-y-4 relative">
              {calendar.map((c) => (
                <div key={c.term} className="rounded-2xl bg-white/10 border border-white/15 p-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold">{c.term}</div>
                    <div className="font-display text-lg font-semibold">{c.dates}</div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold text-xs font-bold">{c.term.charAt(0)}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-dashed border-gold/40 p-5">
              <div className="text-xs uppercase tracking-widest text-gold">Events & Announcements</div>
              <div className="font-display text-lg mt-1">Open House — Saturday, 13 September 2025</div>
              <div className="text-sm text-white/75 mt-1">Tour the campus, meet our teachers and the proprietor.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
