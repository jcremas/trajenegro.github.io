import { motion } from "framer-motion";
import sceneFooter from "@/assets/scene-footer.jpg";

const asmrEase = [0.25, 0.1, 0.25, 1] as const;

const FooterSection = () => {
  return (
    <section className="snap-section relative h-[100dvh] flex items-center justify-center bg-background overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 4, ease: asmrEase }}
      >
        <img
          src={sceneFooter}
          alt=""
          className="w-full h-full object-cover asmr-ken-burns"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/85" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-8 asmr-float"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 3, ease: asmrEase }}
      >
        <div className="w-12 h-px bg-gold mb-14 asmr-breathe-slow" />

        <motion.h2
          className="text-cinematic text-xs text-muted-foreground mb-16 tracking-[0.5em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 3, ease: asmrEase, delay: 0.5 }}
        >
          TRAJE NEGRO
        </motion.h2>

        <motion.p
          className="font-serif-display text-base md:text-lg text-muted-foreground font-light italic tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 3, ease: asmrEase, delay: 1 }}
        >
          Primera edición disponible próximamente
        </motion.p>

        <div className="w-12 h-px bg-gold mt-14 asmr-breathe-slow" />
      </motion.div>
    </section>
  );
};

export default FooterSection;
