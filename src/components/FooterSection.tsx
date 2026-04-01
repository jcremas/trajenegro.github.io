import { motion } from "framer-motion";
import sceneFooter from "@/assets/scene-footer.jpg";

const FooterSection = () => {
  return (
    <section className="snap-section relative h-[100dvh] flex items-center justify-center bg-background overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src={sceneFooter}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/80" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-16 h-px bg-gold mb-12" />

        <h2 className="text-cinematic text-xs md:text-sm text-muted-foreground mb-16 tracking-[0.4em]">
          TRAJE NEGRO
        </h2>

        <p className="font-serif-display text-lg md:text-xl text-muted-foreground font-light italic">
          Primera edición disponible próximamente
        </p>

        <div className="w-16 h-px bg-gold mt-12" />
      </motion.div>
    </section>
  );
};

export default FooterSection;
