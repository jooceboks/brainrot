"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="text-center pt-10 pb-4 px-4">
        <h1
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          GYATT&apos;S GUIDE
        </h1>
        <p className="text-indigo-400/60 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] italic animate-pulse">
          TUNG TUNG SAHUR IS MOGGING YOUR RIZZLER. 0 AURAPOINTS DETECTED. WINTER ARC CANCELED.
        </p>
      </div>
    </header>
  );
}
