import React, { useContext, useState } from 'react';
import { Language, LocalizationContextProps } from '@/types/types';

export const LocalizationContext = React.createContext<
  LocalizationContextProps | undefined
>(undefined);

export const useLocalization = () => {
  return useContext(LocalizationContext);
};

export const LocalizationProvider = ({ children }) => {
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
