import enStrings from './en';
import ruStrings from './ru';

export const REGIONS = {
  RU: 'RU' as const,
  EN: 'EN' as const,
};

export type Language = (typeof REGIONS)[keyof typeof REGIONS];

export const LOCALE_STRINGS = {
  [REGIONS.RU]: ruStrings,
  [REGIONS.EN]: enStrings,
};
