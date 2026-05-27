import { motion } from "framer-motion";
import sceneCellar from "@/assets/scene-cellar.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const asmrEase = [0.25, 0.1, 0.25, 1] as const;

const CTASection = () => {
  const { lang } = useLanguage();
  const t = translations.cta;

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
          className="font-serif-display text-[28px] md:text-4xl text-ivory font-light italic mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2.5, ease: asmrEase, delay: 0.8 }}
        >
          {t.line1[lang]}
        </motion.p>
        <motion.p
          className="font-serif-display text-[28px] md:text-4xl text-ivory font-light italic mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2.5, ease: asmrEase, delay: 1.4 }}
        >
          {(() => {
            const text = t.line2[lang];
            const spaceIdx = text.indexOf(" ");
            const firstWord = text.slice(0, spaceIdx);
            const redWord = { es: "Ver", pt: "Ver", en: "See" }[lang];
            const rest = text.slice(spaceIdx);
            return (
              <>
                <span className="asmr-scroll-word">
                  <span className="asmr-scroll-inner">
                    <span className="asmr-scroll-white">{firstWord}</span>
                    <span className="asmr-scroll-red">{redWord}</span>
                    <span className="asmr-scroll-white">{firstWord}</span>
                  </span>
                </span>
                {rest}
              </>
            );
          })()}
        </motion.p>

        <motion.a
          href="https://wa.me/5492616206265?text=Quisiera%20mayor%20informacion%20de%20Traje%20Negro"
          target="_blank"
          rel="noopener noreferrer"
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
          {t.button[lang]}
        </motion.a>

        <div className="w-10 h-px bg-gold mt-12 asmr-breathe" />
      </motion.div>

      <motion.p
        className="absolute bottom-6 left-0 right-0 z-10 text-center text-ivory/40 text-[10px] md:text-xs tracking-wide px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 2, ease: asmrEase, delay: 2.5 }}
      >
        {t.disclaimer[lang]}
      </motion.p>
    </section>
  );
};

export default CTASection;
