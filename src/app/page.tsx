"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import slangData from "@/data/slang.json";
import Header from "@/components/Header";
import LexiconCard from "@/components/LexiconCard";
import AuraControls from "@/components/AuraControls";

function loadAura(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem("lexicon_aura");
    return raw ? parseInt(raw, 10) : 0;
  } catch {
    return 0;
  }
}

function saveAura(aura: number) {
  localStorage.setItem("lexicon_aura", String(aura));
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [aura, setAura] = useState(0);
  const [mounted, setMounted] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setAura(loadAura());
    setMounted(true);
  }, []);

  const terms = slangData as { term: string; definition: string; generation: string; example?: string }[];
  const currentTerm = terms[currentIndex];

  useEffect(() => {
    if (!mounted) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setAura((prev) => {
      const next = prev + 5;
      saveAura(next);
      return next;
    });
  }, [currentIndex, mounted]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((i) => (i + 1) % terms.length);
  }, [terms.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((i) => (i - 1 + terms.length) % terms.length);
  }, [terms.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  if (!mounted) {
    return <div className="min-h-screen bg-[#121212]" />;
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #121212 0%, #1a1a2e 50%, #121212 100%)",
      }}
    >
      <Header />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-24">
        {currentTerm ? (
          <>
            <LexiconCard
              term={currentTerm}
              direction={direction}
            />

            <AuraControls
              onPrev={goPrev}
              onNext={goNext}
              currentIndex={currentIndex}
              total={terms.length}
              aura={aura}
            />
          </>
        ) : (
          <div className="text-white/40 font-mono text-sm">
            No terms found.
          </div>
        )}
      </div>
    </main>
  );
}
