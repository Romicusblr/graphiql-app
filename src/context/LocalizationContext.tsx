import React, { useContext, useState } from 'react';
import {
  Language,
  LocalizationContextProps,
  LocalizationProviderProps,
} from '@/types';

export const LocalizationContext = React.createContext<
  LocalizationContextProps | undefined
>(undefined);

export const useLocalization = () => {
  return useContext(LocalizationContext);
};

export const LocalizationProvider = ({
  children,
}: LocalizationProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};
