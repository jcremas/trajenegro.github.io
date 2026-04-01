import { motion } from "framer-motion";
import heroBottle from "@/assets/hero-bottle.jpg";

const HeroSection = () => {
  return (
    <section className="snap-section relative h-[100dvh] flex items-center justify-center bg-background overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <img
          src={heroBottle}
          alt="Traje Negro"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/50" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.8 }}
      >
        <motion.div
          className="h-px bg-gold"
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 1.2 }}
        />

        <h1 className="text-cinematic-lg text-ivory">TRAJE NEGRO</h1>

        <p className="font-serif-display text-xl md:text-2xl text-muted-foreground italic font-light tracking-wide">
          El carácter no se negocia.
        </p>

        <motion.div
          className="h-px bg-gold"
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 1.2 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
