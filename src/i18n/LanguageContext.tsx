import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang } from "./translations";

function detectLanguage(): Lang {
  const nav = navigator.language || (navigator as any).userLanguage || "es";
  const code = nav.toLowerCase().split("-")[0];
  if (code === "pt") return "pt";
  if (code === "en") return "en";
  return "es";
}

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
