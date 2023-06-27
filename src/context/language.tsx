"use client";

import { Lang, LanguageContextType } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  changeLang(arg) {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const value = {
    lang,
    changeLang: (langId: Lang) => setLang(langId),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
