"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TextBlockProps {
  lines: string[];
  image?: string;
  overlayOpacity?: number;
  alignment?: "center" | "left" | "right";
  containImage?: boolean;
  redParagraphs?: number;
}

const asmrEase = [0.25, 0.1, 0.25, 1] as const;

export function TextBlock({
  lines,
  image,
  overlayOpacity = 0.7,
  alignment = "center",
  containImage = false,
  redParagraphs = 1,
}: TextBlockProps) {
  const alignClass =
    alignment === "left"
      ? "items-start text-left"
      : alignment === "right"
        ? "items-end text-right"
        : "items-center text-center";

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
          <div
            className={`w-full h-full ${containImage ? "bg-black flex items-center justify-center" : ""}`}
          >
            <Image
              src={image}
              alt=""
              fill
              className={`${containImage ? "object-contain" : "object-cover"} asmr-ken-burns`}
              loading="lazy"
            />
          </div>
          <div
            className="absolute inset-0 bg-background"
            style={{ opacity: overlayOpacity }}
          />
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
              // Check if this empty line is between two red paragraphs — if so, skip it
              const prevParagraphs = lines
                .slice(0, i)
                .filter((l) => l !== "").length;
              const nextNonEmpty = lines.slice(i + 1).find((l) => l !== "");
              const nextParagraphIndex = prevParagraphs;
              if (
                prevParagraphs <= redParagraphs &&
                nextNonEmpty &&
                nextParagraphIndex < redParagraphs
              ) {
                return null;
              }
              return <div key={i} className="h-6 md:h-10" />;
            }
            const isRed = paragraphIndex < redParagraphs;
            paragraphIndex++;
            return (
              <motion.p
                key={i}
                className={`font-serif-display ${
                  isRed
                    ? "leading-snug text-[31px] md:text-[33px] lg:text-[40px] text-[hsl(0,70%,50%)] font-bold"
                    : "leading-loose text-[28px] md:text-3xl lg:text-4xl text-ivory font-light"
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
}
