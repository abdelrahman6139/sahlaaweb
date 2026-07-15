"use client";

import React, { createContext, useContext } from "react";
import { translations, type Language, type TranslationKey } from "@/constants/translations";

interface LanguageContextType {
  language: Language;
  t: TranslationKey;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Locale is now driven by the URL segment (/en, /ar) and passed in by the
 * server layout. This provider just exposes it to client components; the
 * language switch itself is a navigation (see LanguageSwitcher).
 */
export function LanguageProvider({
  language,
  children,
}: {
  language: Language;
  children: React.ReactNode;
}) {
  const value: LanguageContextType = {
    language,
    t: translations[language],
    isRTL: language === "ar",
  };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
