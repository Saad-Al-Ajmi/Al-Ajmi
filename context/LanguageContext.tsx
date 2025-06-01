// app/context/LanguageContext.tsx
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { en, AppTranslations } from '../translations/en'; // Adjust path if needed
import { ar } from '../translations/ar';                     // Adjust path if needed

type LanguageCode = 'en' | 'ar';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  translations: AppTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translationsData = {
  en: en,
  ar: ar,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    // Set the lang attribute on the HTML element
    document.documentElement.lang = language;

    // --- MODIFICATION START ---
    // We will NOT change the dir attribute anymore to keep LTR layout
    // If you ever want RTL styling back, you can uncomment the line below
    // and ensure your CSS handles RTL appropriately.
    // document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    // --- MODIFICATION END ---

  }, [language]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  const value = {
    language,
    setLanguage,
    translations: translationsData[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};