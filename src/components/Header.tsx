import LanguageToggle from '@/components/LanguageToggle';
import { NavLink } from 'react-router-dom';
import { useLocalization } from '@/context/LocalizationContext';
import { LocalizationContextProps } from '@/types';
import enStrings from '@/locales/en';
import ruStrings from '@/locales/ru';

const Header = () => {
  const { language } = useLocalization() as LocalizationContextProps;
  const strings = language === 'en' ? enStrings : ruStrings;

  return (
    <>
      <header className="px-2 flex items-center justify-between bg-gray-800">
        <a href="/" className="uppercase font-bold text-gray-400">
          GraphiQL
        </a>
        <nav>
          <ul className="font-semibold text-gray-400">
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/'}>{strings.welcomeTitle}</NavLink>
            </li>
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/login'}>{strings.loginTitle}</NavLink>
            </li>
            <li className="inline-block py-3 px-2">
              <LanguageToggle />
            </li>
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/register'}>{strings.registerTitle}</NavLink>
            </li>
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/logout'}>{strings.logoutTitle}</NavLink>
            </li>
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/codemirror'}>Code Mirror</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
