# GYATT'S GUIDE

A brutalist, dark-mode Gen Z/Alpha slang dictionary built with Next.js 14.

## Features

- 100 slang terms with definitions, generation tags, and example usage
- Glassmorphism card UI with smooth animated transitions
- Auto-incrementing aura counter (+5 per card viewed) with progress bar
- Dense meme sticker background with parallax mouse tracking
- Film grain overlay for editorial aesthetic
- Keyboard navigation (arrow keys)
- Aura score persisted to localStorage

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3.4
- Framer Motion
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
  app/
    page.tsx          # Main page — card viewer, aura logic, keyboard nav
    layout.tsx        # Root layout with Geist Mono font
    globals.css       # Tailwind + dark mode base styles
  components/
    StickerBackground.tsx  # Parallax emoji sticker wall
    Header.tsx             # Title + ragebait subtitle
    LexiconCard.tsx        # Glassmorphism term card with transitions
    AuraControls.tsx       # Prev/next nav + aura progress bar
  data/
    slang.json        # 99 terms with definitions, generations, examples
```

## Deploy

```bash
npm run build
```

Deploy the `.next` output to Vercel or any Node.js host.
