import React from 'react';
import { localeStrings, regions } from '@/context/constants';

interface LocaleProviderProps {
  children: React.ReactNode;
}

const initialState = {
  strings: localeStrings[regions.en],
};

const LocaleContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeLocale': {
      return {
        ...state,
        strings: localeStrings[action.payload.region],
      };
    }
    default:
      return state;
  }
};

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <LocaleContext.Provider value={{ state, dispatch }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => React.useContext(LocaleContext);
