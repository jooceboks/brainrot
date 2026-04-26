"use client";

import { motion } from "framer-motion";

interface AuraControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
  aura: number;
}

export default function AuraControls({
  onPrev,
  onNext,
  currentIndex,
  total,
  aura,
}: AuraControlsProps) {
  const progress = total > 1 ? ((currentIndex + 1) / total) * 100 : 100;

  return (
    <div className="w-full max-w-md mx-auto mt-6 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onPrev}
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Previous term"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>

        <span className="text-white/30 text-xs font-mono tabular-nums min-w-[4rem] text-center">
          {currentIndex + 1} / {total}
        </span>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Next term"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-emerald-400/80">⚡ AURA {aura >= 0 ? `+${aura.toLocaleString()}` : aura.toLocaleString()}</span>
          <span className="text-white/20">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #6366f1, #10b981)",
            }}
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </div>
  );
}
