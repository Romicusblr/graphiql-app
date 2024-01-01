import { LocalizationContext } from '@/context/LocalizationContext';
import { useContext } from 'react';

export const useLocalization = () => {
  return useContext(LocalizationContext);
};
