import { motion } from "framer-motion";
import heroBottle from "@/assets/hero-bottle.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, Lang } from "@/i18n/translations";

const asmrEase = [0.25, 0.1, 0.25, 1] as const;
const langs: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
];

const HeroSection = () => {
  const { lang, setLang } = useLanguage();
  const t = translations.hero;

  return (
    <section className="snap-section relative h-[100dvh] flex items-center justify-center bg-background overflow-hidden">
      {/* Language selector */}
      <div className="absolute top-6 right-6 z-20 flex gap-3">
        {langs.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`text-[11px] tracking-[0.25em] transition-all duration-700 ${
              lang === l.code
                ? "text-white border-b border-white/80 pb-0.5 font-semibold"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5, ease: asmrEase }}
      >
        <div className="w-full h-full bg-black flex items-center justify-center">
          <img
            src={heroBottle}
            alt="Traje Negro"
            className="h-full object-contain asmr-ken-burns"
            width={1080}
            height={1920}
          />
        </div>
        <div className="absolute inset-0 bg-background/45" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-8 asmr-float"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: asmrEase, delay: 1.5 }}
      >
        <motion.div
          className="h-px bg-gold asmr-breathe"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 3.5, ease: asmrEase, delay: 2.5 }}
        />

        <motion.h1
          className="text-cinematic-lg text-ivory text-[34px] md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 4, ease: asmrEase, delay: 2 }}
        >
          {t.title[lang]}
          <span className="sr-only"> — Vinos de carácter, edición limitada</span>
        </motion.h1>

        <motion.p
          className="font-serif-display text-[28px] md:text-5xl text-white italic font-light tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 3, ease: asmrEase, delay: 3.5 }}
        >
          {t.subtitle[lang]}
        </motion.p>

        <motion.div
          className="h-px bg-gold asmr-breathe"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 3.5, ease: asmrEase, delay: 2.5 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
