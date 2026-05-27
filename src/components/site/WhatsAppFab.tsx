import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const numbers = [
  { label: "Admissions Desk", n: "2348036131258" },
  { label: "Academic Office", n: "2349064446293" },
  { label: "General Inquiries", n: "2348035866471" },
];

export function WhatsAppFab({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[60] h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center hover:scale-110 transition"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="h-6 w-6 relative" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-royal-deep/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed bottom-24 right-6 z-[60] w-[min(360px,calc(100vw-3rem))] rounded-3xl bg-card border border-border shadow-elegant overflow-hidden"
            >
              <div className="bg-gradient-royal text-white p-5 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.13_75/0.4),transparent_60%)]" />
                <div className="relative flex items-start justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold">WhatsApp Support</div>
                    <div className="font-display text-lg font-semibold mt-1">Choose a line</div>
                    <div className="text-xs text-white/70 mt-1">We usually reply within an hour.</div>
                  </div>
                  <button onClick={() => setOpen(false)} className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"><X className="h-4 w-4" /></button>
                </div>
              </div>
              <div className="p-3">
                {numbers.map((n) => (
                  <a
                    key={n.n}
                    href={`https://wa.me/${n.n}?text=${encodeURIComponent("Hello Spring of Knowledge, I'd like to inquire about your school.")}`}
                    target="_blank" rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl px-4 py-3 hover:bg-muted transition"
                  >
                    <div>
                      <div className="text-sm font-semibold">{n.label}</div>
                      <div className="text-xs text-muted-foreground">+{n.n.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4")}</div>
                    </div>
                    <span className="h-9 w-9 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:scale-110 transition">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
