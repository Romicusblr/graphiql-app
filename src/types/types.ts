export type UserAuth = {
  id: string;
  email: string;
  token: string;
};

export type Language = 'en' | 'ru';

export interface LocalizationContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}
