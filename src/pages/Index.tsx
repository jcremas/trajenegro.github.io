import { useRef } from "react";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import HeroSection from "@/components/HeroSection";
import TextBlock from "@/components/TextBlock";
import BlackTransition from "@/components/BlackTransition";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

import sceneWineGlass from "@/assets/scene-wine-glass.jpg";
import sceneVineyard from "@/assets/scene-vineyard.jpg";
import sceneElegance from "@/assets/scene-elegance.jpg";
import sceneExclusive from "@/assets/scene-exclusive.jpg";

const blockImages = [sceneWineGlass, sceneElegance, sceneVineyard, sceneExclusive];
const blockOverlays = [0.55, 0.68, 0.65, 0.65];

const Index = () => {
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
          />
        </div>
      ))}

      <BlackTransition />

      <CTASection />
    </main>
  );
};

export default Index;
