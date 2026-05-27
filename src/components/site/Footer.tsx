import { Facebook, Instagram, Music, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

export function Footer() {
  const onSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") || "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 255) {
      toast.error("Please enter a valid email.");
      return;
    }
    (e.target as HTMLFormElement).reset();
    toast.success("Subscribed! Welcome to our newsletter.");
  };

  return (
    <footer className="relative bg-[oklch(0.16_0.04_268)] text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,oklch(0.36_0.16_268/0.5),transparent_55%),radial-gradient(circle_at_80%_100%,oklch(0.72_0.13_75/0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-14 w-14 object-contain" />
              <div>
                <div className="font-display text-lg font-semibold">Spring of Knowledge</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">International School</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-sm">
              <span className="italic font-display text-gold">"Knowledge is Light."</span> Raising future leaders through
              knowledge, character and excellence since 1999.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Music].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-gradient-gold hover:text-[oklch(0.22_0.05_75)] hover:border-transparent transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm uppercase tracking-widest text-gold">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {["About", "Academics", "Gallery", "Facilities", "Admissions", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-widest text-gold">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> No 2, Tony Limba Crescent, Gbazango, Kubwa Abuja.</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href="tel:+2348036131258" className="hover:text-gold">+234 803 613 1258</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href="mailto:springokis@gmail.com" className="hover:text-gold">springokis@gmail.com</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-widest text-gold">Newsletter</h4>
            <p className="mt-5 text-sm text-white/70">Get school news and announcements in your inbox.</p>
            <form onSubmit={onSub} className="mt-4 flex items-center gap-2 rounded-full bg-white/5 border border-white/15 p-1.5 focus-within:border-gold transition">
              <input name="email" type="email" required placeholder="you@email.com" maxLength={255}
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-white/40 focus:outline-none" />
              <button type="submit" className="h-9 w-9 rounded-full bg-gradient-gold text-[oklch(0.22_0.05_75)] flex items-center justify-center hover:scale-105 transition" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 h-32">
              <iframe title="Mini map" className="w-full h-full grayscale" src="https://www.google.com/maps?q=Gbazango+Kubwa+Abuja&output=embed" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Spring of Knowledge International School · RC 682911</div>
          <div className="flex items-center gap-2"><span className="h-px w-6 bg-gold/60" /> Crafted with care in Abuja, Nigeria</div>
        </div>
      </div>
    </footer>
  );
}
