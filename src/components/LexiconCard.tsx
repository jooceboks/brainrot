"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Term {
  term: string;
  definition: string;
  generation: string;
  example?: string;
}

interface LexiconCardProps {
  term: Term;
  direction: number;
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
  }),
};

export default function LexiconCard({ term, direction }: LexiconCardProps) {
  return (
    <div className="relative w-full max-w-md mx-auto" style={{ minHeight: 220 }}>
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={term.term}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="w-full"
        >
          <div
            className="relative rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, transparent 50%, rgba(16,185,129,0.1) 100%)",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-end mb-5">
                <span className="text-xs font-mono text-indigo-300/60 bg-indigo-500/10 border border-indigo-500/15 rounded-full px-2.5 py-1 uppercase tracking-widest">
                  {term.generation}
                </span>
              </div>

              <h2
                className="text-4xl font-bold text-white mb-4 tracking-tight"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {term.term.toUpperCase()}
              </h2>

              <p className="text-white/70 text-base leading-relaxed font-light">
                <span className="text-indigo-300/80 italic">Adj.</span>
                {" — "}
                <span className="text-emerald-300/60 italic">*{term.generation}.*</span>{" "}
                {term.definition}
              </p>

              {term.example && (
                <p className="mt-4 text-sm text-white/40 italic leading-relaxed border-l-2 border-white/10 pl-3">
                  {term.example}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
