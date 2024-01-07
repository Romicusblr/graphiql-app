import React, { useState } from 'react';
import { REGIONS, Language, LOCALE_STRINGS } from '@/locales/constants';

export interface LocalizationProviderProps {
  children: React.ReactNode;
}

export interface LocalizationContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  strings: (typeof LOCALE_STRINGS)[keyof typeof LOCALE_STRINGS];
}

const DEFAULT_LANGUAGE = REGIONS.EN;

const defaultContextValue: LocalizationContextProps = {
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {}, // no-op function
  strings: LOCALE_STRINGS[DEFAULT_LANGUAGE],
};

export const LocalizationContext =
  React.createContext<LocalizationContextProps>(defaultContextValue);

export const LocalizationProvider = ({
  children,
}: LocalizationProviderProps) => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  const value = {
    language,
    setLanguage,
    strings: LOCALE_STRINGS[language],
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};
