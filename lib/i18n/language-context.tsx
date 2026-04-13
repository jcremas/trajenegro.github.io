"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang } from "./translations";

function detectLanguage(): Lang {
  if (typeof window === "undefined") return "es";
  const nav = navigator.language || (navigator as unknown as { userLanguage: string }).userLanguage || "es";
  const code = nav.toLowerCase().split("-")[0];
  if (code === "pt") return "pt";
  if (code === "en") return "en";
  return "es";
}

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "es", setLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLang(detectLanguage());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
