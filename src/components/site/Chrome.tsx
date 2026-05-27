import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Facebook, Instagram, Music } from "lucide-react";
import logo from "@/assets/logo.png";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[oklch(0.16_0.04_268)]"
        >
          <div className="text-center">
            <motion.img
              src={logo} alt="Spring of Knowledge"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="h-24 w-24 mx-auto drop-shadow-2xl"
            />
            <motion.div
              initial={{ width: 0 }} animate={{ width: 160 }} transition={{ duration: 1.2 }}
              className="mt-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            />
            <div className="mt-4 text-xs uppercase tracking-[0.4em] text-gold font-display">Knowledge is Light</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 left-6 z-[60] h-12 w-12 rounded-full bg-gradient-royal text-white shadow-elegant flex items-center justify-center hover:scale-110 transition"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function SocialRail() {
  return (
    <div className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
      {[
        { I: Facebook, href: "https://facebook.com" },
        { I: Instagram, href: "https://instagram.com/springokis" },
        { I: Music, href: "https://tiktok.com/@springokis" },
      ].map(({ I, href }, i) => (
        <a key={i} href={href} target="_blank" rel="noreferrer"
          className="h-10 w-10 rounded-full glass border border-border flex items-center justify-center text-foreground/70 hover:text-[oklch(0.22_0.05_75)] hover:bg-gradient-gold hover:border-transparent transition">
          <I className="h-4 w-4" />
        </a>
      ))}
      <div className="h-12 w-px mx-auto bg-gradient-to-b from-gold to-transparent" />
    </div>
  );
}
