import { motion } from "framer-motion";
import sceneCellar from "@/assets/scene-cellar.jpg";

const asmrEase = [0.25, 0.1, 0.25, 1] as const;

const CTASection = () => {
  return (
    <section className="snap-section relative h-[100dvh] flex items-center justify-center bg-background overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 3.5, ease: asmrEase }}
      >
        <img
          src={sceneCellar}
          alt=""
          className="w-full h-full object-cover asmr-ken-burns"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/75" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-8 asmr-float"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 2.5, ease: asmrEase, delay: 0.5 }}
      >
        <div className="w-10 h-px bg-gold mb-12 asmr-breathe" />

        <motion.p
          className="font-serif-display text-[25px] md:text-3xl text-ivory font-light italic mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2.5, ease: asmrEase, delay: 0.8 }}
        >
          Algunos vinos acompañan, otros definen.
        </motion.p>
        <motion.p
          className="font-serif-display text-[25px] md:text-3xl text-ivory font-light italic mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2.5, ease: asmrEase, delay: 1.4 }}
        >
          Beber para creer.
        </motion.p>

        <motion.button
          className="px-14 py-5 border border-gold/50 text-ivory/80 text-cinematic text-xs
                     bg-transparent hover:border-gold hover:text-ivory
                     transition-all duration-[1.5s] ease-in-out tracking-[0.35em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2, ease: asmrEase, delay: 2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
        >
          EXPLORAR TRAJE NEGRO
        </motion.button>

        <div className="w-10 h-px bg-gold mt-12 asmr-breathe" />
      </motion.div>

      <motion.p
        className="absolute bottom-6 left-0 right-0 z-10 text-center text-ivory/40 text-[10px] md:text-xs tracking-wide px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 2, ease: asmrEase, delay: 2.5 }}
      >
        Contiene alcohol. Prohibido el consumo a menores de 18 años. Beber responsablemente.
      </motion.p>
    </section>
  );
};

export default CTASection;
