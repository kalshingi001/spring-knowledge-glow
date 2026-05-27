import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#academics", label: "Academics" },
  { href: "#gallery", label: "Gallery" },
  { href: "#facilities", label: "Facilities" },
  { href: "#admissions", label: "Admissions" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ onWhatsApp }: { onWhatsApp: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="Spring of Knowledge logo" className="h-12 w-12 object-contain drop-shadow-md transition-transform group-hover:scale-110" />
          <div className="hidden sm:block leading-tight">
            <div className={`font-display text-lg font-bold ${scrolled ? "text-foreground" : "text-white"}`}>Spring of Knowledge</div>
            <div className={`text-[10px] uppercase tracking-[0.22em] ${scrolled ? "text-muted-foreground" : "text-white/75"}`}>International School</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"
              } after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:scale-x-0 after:bg-gold after:origin-left after:transition-transform hover:after:scale-x-100`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className={`hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full transition ${
              scrolled ? "hover:bg-muted text-foreground" : "hover:bg-white/10 text-white"
            }`}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={onWhatsApp}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-[oklch(0.22_0.05_75)] shadow-gold hover:scale-[1.03] transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </button>
          <button
            className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ${
              scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass border-t border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { onWhatsApp(); setOpen(false); }}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-[oklch(0.22_0.05_75)]"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
