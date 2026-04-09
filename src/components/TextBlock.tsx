import { motion } from "framer-motion";

interface TextBlockProps {
  lines: string[];
  image?: string;
  overlayOpacity?: number;
  alignment?: "center" | "left" | "right";
  containImage?: boolean;
  redParagraphs?: number;
}

const asmrEase = [0.25, 0.1, 0.25, 1] as const;

const TextBlock = ({ lines, image, overlayOpacity = 0.7, alignment = "center", containImage = false, redParagraphs = 1 }: TextBlockProps) => {
  const alignClass = alignment === "left" ? "items-start text-left" : alignment === "right" ? "items-end text-right" : "items-center text-center";

  return (
    <section className="snap-section relative h-[100dvh] flex items-center justify-center bg-background overflow-hidden">
      {image && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 3.5, ease: asmrEase }}
        >
          <div className={`w-full h-full ${containImage ? 'bg-black flex items-center justify-center' : ''}`}>
            <img
              src={image}
              alt=""
              className={`${containImage ? 'h-full object-contain' : 'w-full h-full object-cover'} asmr-ken-burns`}
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
          <div className="absolute inset-0 bg-background" style={{ opacity: overlayOpacity }} />
        </motion.div>
      )}

      <motion.div
        className={`relative z-10 flex flex-col ${alignClass} px-8 md:px-16 max-w-[650px]`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 2.5, ease: asmrEase }}
      >
        <div className="w-8 h-px bg-gold mb-12 asmr-breathe" />
        {(() => {
          let paragraphIndex = 0;
          return lines.map((line, i) => {
            if (line === "") {
              return <div key={i} className="h-6 md:h-10" />;
            }
            const isRed = paragraphIndex < redParagraphs;
            paragraphIndex++;
            return (
              <motion.p
                key={i}
                className={`font-serif-display text-[28px] md:text-3xl lg:text-4xl leading-loose ${
                  isRed ? 'text-[hsl(0,70%,50%)] font-bold' : 'text-ivory font-light'
                }`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 2, ease: asmrEase, delay: 0.3 * i }}
              >
                {line}
              </motion.p>
            );
          });
        })()}
        <div className="w-8 h-px bg-gold mt-12 asmr-breathe" />
      </motion.div>
    </section>
  );
};

export default TextBlock;
