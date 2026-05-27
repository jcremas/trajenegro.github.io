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
          href="https://descomunalwines.mitiendanube.com"
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

      {/* Floating WhatsApp CTA */}
      <motion.a
        href="https://wa.me/5492616206265?text=Quisiera%20mayor%20informacion%20de%20Traje%20Negro"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/40 hover:scale-110 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, ease: asmrEase, delay: 3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-7 h-7 text-white"
        >
          <path d="M380.9 97.1C339.6 55.8 283.6 32.7 224.2 32.7c-119.8 0-217.4 97.5-217.4 217.4 0 38.3 10 75.8 28.9 108.8L0 480l122.5-32.2c31.7 17.3 67.4 26.4 103.9 26.5h.1c119.8 0 217.4-97.5 217.4-217.4 0-58.2-22.7-113-63.9-154.2-.1-.1-.1-.1-.1-.2zM224.2 418.9c-32.5 0-64.4-8.7-92.3-25.2l-6.6-3.9-66.8 17.5 17.8-65.1-3.8-6.1c-18.3-29.1-28-62.8-28-97.4 0-99.5 81-180.5 180.5-180.5 48.2 0 93.5 18.8 127.6 52.9 34.1 34.1 52.9 79.4 52.9 127.6.2 99.5-80.8 180.4-180.3 180.4zm102.9-140.4c-5.6-2.8-33.2-16.4-38.4-18.3-5.1-1.8-8.9-2.8-12.7 2.8-3.7 5.6-14.5 18.3-17.8 22.1-3.2 3.7-6.5 4.2-12.1 1.4-33.2-16.4-53.5-29.3-75-66.3-5.7-9.8 5.7-9.1 16.3-30.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.7-30.6-17.4-41.9-4.6-11.1-9.2-9.6-12.7-9.8-3.2-.1-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.5 19.1-19.5 46.5 0 27.4 20 53.8 22.8 57.5 2.8 3.7 39.4 60.2 95.5 84.4 13.4 5.8 23.8 9.2 32 11.8 13.4 4.3 25.6 3.7 35.2 2.2 10.8-1.7 33.2-13.6 37.9-26.7 4.7-13.1 4.7-24.3 3.2-26.7-1.3-2.5-5.1-3.9-10.7-6.7z" />
        </svg>
      </motion.a>
    </section>
  );
};

export default CTASection;
