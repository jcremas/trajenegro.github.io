import { motion } from "framer-motion";

interface TextBlockProps {
  lines: string[];
  image?: string;
  overlayOpacity?: number;
  alignment?: "center" | "left" | "right";
}

const TextBlock = ({ lines, image, overlayOpacity = 0.7, alignment = "center" }: TextBlockProps) => {
  const alignClass = alignment === "left" ? "items-start text-left" : alignment === "right" ? "items-end text-right" : "items-center text-center";

  return (
    <section className="snap-section relative h-[100dvh] flex items-center justify-center bg-background overflow-hidden">
      {image && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background" style={{ opacity: overlayOpacity }} />
        </motion.div>
      )}

      <motion.div
        className={`relative z-10 flex flex-col ${alignClass} px-8 md:px-16 max-w-[700px]`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-10 h-px bg-gold mb-10" />
        {lines.map((line, i) => {
          if (line === "") {
            return <div key={i} className="h-4 md:h-6" />;
          }
          return (
            <motion.p
              key={i}
              className="font-serif-display text-xl md:text-3xl lg:text-4xl text-ivory font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 * i }}
            >
              {line}
            </motion.p>
          );
        })}
        <div className="w-10 h-px bg-gold mt-10" />
      </motion.div>
    </section>
  );
};

export default TextBlock;
