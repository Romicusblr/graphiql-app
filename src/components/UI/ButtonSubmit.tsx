import { useLocalization } from '@/context/LocalizationContext';
import enStrings from '@/locales/en';
import ruStrings from '@/locales/ru';
import { LocalizationContextProps } from '@/types';
import React from 'react';

const ButtonSubmit = ({ name }: { name: string }) => {
  const { language } = useLocalization() as LocalizationContextProps;
  const strings = language === 'en' ? enStrings : ruStrings;
  return (
    <button
      type="submit"
      className="flex w-full mt-3 justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
    >
      {name === 'login' ? strings.loginTitle : strings.registerTitle}
    </button>
  );
};

export default ButtonSubmit;
