import LanguageToggle from '@/components/LanguageToggle';
import { NavLink } from 'react-router-dom';
import { useLocalization } from '@/context/LocalizationContext';

const Header = () => {
  const { strings } = useLocalization();

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
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
