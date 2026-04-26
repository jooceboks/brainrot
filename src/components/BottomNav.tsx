"use client";

import { motion } from "framer-motion";

type Tab = "explore" | "favorites" | "leaderboard";

interface BottomNavProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { id: Tab; icon: string; label: string }[] = [
  { id: "explore", icon: "∞", label: "Explore" },
  { id: "favorites", icon: "♡", label: "Favorites" },
  { id: "leaderboard", icon: "🏆", label: "Leaderboard" },
];

export default function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div
        className="border-t border-white/10 px-6 py-3"
        style={{
          background: "rgba(18,18,18,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => onChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-4 py-1 rounded-lg transition-colors ${
                active === tab.id
                  ? "text-emerald-400"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="text-[10px] font-mono uppercase tracking-wider">
                {tab.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}
