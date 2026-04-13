"use client";

import { useRef } from "react";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { HeroSection } from "@/components/hero-section";
import { TextBlock } from "@/components/text-block";
import { BlackTransition } from "@/components/black-transition";
import { CTASection } from "@/components/cta-section";
import { useLanguage } from "@/lib/i18n/language-context";
import { translations } from "@/lib/i18n/translations";

const blockImages = [
  "/images/scene-wine-glass.jpg",
  "/images/scene-elegance.jpg",
  "/images/scene-vineyard.jpg",
  "/images/scene-exclusive.jpg",
];
const blockOverlays = [0.55, 0.68, 0.65, 0.65];
const blockRedParagraphs = [2, 2, 1, 2];

export function HomePage() {
  const mainRef = useRef<HTMLElement>(null);
  const { lang } = useLanguage();

  return (
    <main ref={mainRef} className="bg-background scroll-container">
      <ScrollProgressBar containerRef={mainRef} />

      <HeroSection />

      {translations.blocks.map((block, i) => (
        <div key={i}>
          <BlackTransition />
          <TextBlock
            image={blockImages[i]}
            overlayOpacity={blockOverlays[i]}
            lines={block.lines[lang] as unknown as string[]}
            redParagraphs={blockRedParagraphs[i]}
          />
        </div>
      ))}

      <BlackTransition />

      <CTASection />
    </main>
  );
}
