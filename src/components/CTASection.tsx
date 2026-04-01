import { motion } from "framer-motion";
import sceneCellar from "@/assets/scene-cellar.jpg";

const CTASection = () => {
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
          src={sceneCellar}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <div className="w-12 h-px bg-gold mb-10" />

        <p className="font-serif-display text-2xl md:text-4xl text-ivory font-light italic mb-2">
          Algunos vinos acompañan.
        </p>
        <p className="font-serif-display text-2xl md:text-4xl text-ivory font-light italic mb-12">
          Otros definen.
        </p>

        <motion.button
          className="px-12 py-4 border border-gold text-ivory text-cinematic text-xs md:text-sm
                     bg-transparent hover:bg-gold hover:text-deep-black
                     transition-all duration-700 ease-in-out tracking-[0.3em]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          EXPLORAR TRAJE NEGRO
        </motion.button>

        <div className="w-12 h-px bg-gold mt-10" />
      </motion.div>
    </section>
  );
};

export default CTASection;
