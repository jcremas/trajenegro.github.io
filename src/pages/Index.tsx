import { useRef } from "react";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import HeroSection from "@/components/HeroSection";
import TextBlock from "@/components/TextBlock";
import BlackTransition from "@/components/BlackTransition";
import CTASection from "@/components/CTASection";


import sceneWineGlass from "@/assets/scene-wine-glass.jpg";
import sceneVineyard from "@/assets/scene-vineyard.jpg";
import sceneElegance from "@/assets/scene-elegance.jpg";
import sceneExclusive from "@/assets/scene-exclusive.jpg";

const Index = () => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <main ref={mainRef} className="bg-background scroll-container">
      <ScrollProgressBar containerRef={mainRef} />

      <HeroSection />

      <BlackTransition />

      {/* BLOQUE 1 */}
      <TextBlock
        image={sceneWineGlass}
        overlayOpacity={0.5}
        lines={[
          "No es un vino.",
          "Es una forma de estar.",
          "",
          "Hay elecciones que no necesitan explicación.",
          "Traje Negro representa eso:",
          "presencia, decisión y carácter.",
        ]}
      />

      <BlackTransition />

      {/* BLOQUE 2 */}
      <TextBlock
        image={sceneElegance}
        overlayOpacity={0.68}
        lines={[
          "La elegancia no se fuerza.",
          "Se sostiene.",
          "",
          "No buscamos impacto inmediato.",
          "Buscamos permanencia.",
          "",
          "Porque lo importante no es llamar la atención,",
          "es no pasar desapercibido.",
        ]}
      />

      <BlackTransition />

      {/* BLOQUE 3 */}
      <TextBlock
        image={sceneVineyard}
        overlayOpacity={0.75}
        lines={[
          "Cada detalle importa.",
          "",
          "Desde el origen hasta la botella,",
          "cada decisión construye identidad.",
          "",
          "Nada es casual.",
          "Nada está de más.",
        ]}
      />

      <BlackTransition />

      {/* BLOQUE 4 */}
      <TextBlock
        image={sceneExclusive}
        overlayOpacity={0.75}
        lines={[
          "No es para todos.",
          "Y está bien.",
          "",
          "Traje Negro es para quienes entienden",
          "que elegir también define quién sos.",
        ]}
      />

      <BlackTransition />

      {/* CTA + CIERRE */}
      <CTASection />
    </main>
  );
};

export default Index;
