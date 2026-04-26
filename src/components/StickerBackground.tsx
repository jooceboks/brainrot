"use client";

import { useEffect, useState, useRef } from "react";

interface Sticker {
  id: number;
  emoji: string;
  x: number;
  y: number;
  rotate: number;
  scale: number;
  label?: string;
}

const STICKER_DATA: { emoji: string; label?: string }[] = [
  { emoji: "🐕", label: "much slang" },
  { emoji: "💀" },
  { emoji: "🔥" },
  { emoji: "🐸" },
  { emoji: "💀", label: "Ohio" },
  { emoji: "🚽", label: "SKIBIDI" },
  { emoji: "😭" },
  { emoji: "🗿" },
  { emoji: "💀", label: "FRFR" },
  { emoji: "🐕", label: "wow" },
  { emoji: "👁️" },
  { emoji: "🧠", label: "brainrot" },
  { emoji: "⚡", label: "AURA" },
  { emoji: "🔥", label: "NO CAP" },
  { emoji: "💀", label: "TUNG TUNG" },
  { emoji: "🐕" },
  { emoji: "😤" },
  { emoji: "🗣️", label: "yapping" },
  { emoji: "👑", label: "sigma" },
  { emoji: "💅", label: "slay" },
  { emoji: "🧊", label: "ICE" },
  { emoji: "🐸" },
  { emoji: "💀" },
  { emoji: "🔥" },
  { emoji: "🚽" },
  { emoji: "😤", label: "cooked" },
  { emoji: "🐕", label: "doge" },
  { emoji: "💀" },
  { emoji: "⚡" },
  { emoji: "🗿", label: "mog" },
  { emoji: "🧠" },
  { emoji: "👁️", label: "sus" },
  { emoji: "🐸", label: "rare" },
  { emoji: "💀", label: "L" },
  { emoji: "🔥", label: "W" },
];

function generateStickers(): Sticker[] {
  const stickers: Sticker[] = [];
  const cols = 7;
  const rows = Math.ceil(STICKER_DATA.length / cols);

  STICKER_DATA.forEach((data, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cellW = 100 / cols;
    const cellH = 100 / rows;

    stickers.push({
      id: i,
      emoji: data.emoji,
      label: data.label,
      x: col * cellW + (Math.random() * cellW * 0.6),
      y: row * cellH + (Math.random() * cellH * 0.6),
      rotate: Math.random() * 40 - 20,
      scale: 0.8 + Math.random() * 0.5,
    });
  });
  return stickers;
}

export default function StickerBackground() {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStickers(generateStickers());
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ opacity: 0.35, filter: "saturate(0.3)" }}
    >
      {stickers.map((s) => (
        <div
          key={s.id}
          className="absolute select-none"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px) rotate(${s.rotate}deg) scale(${s.scale})`,
            transition: "transform 0.3s ease-out",
            fontSize: `${2.5 + s.scale}rem`,
          }}
        >
          <div className="relative">
            <span className="drop-shadow-lg">{s.emoji}</span>
            {s.label && (
              <span
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[0.45rem] font-bold text-white/70 whitespace-nowrap tracking-wider uppercase"
                style={{ fontFamily: "system-ui" }}
              >
                {s.label}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
