import LanguageToggle from '@/components/LanguageToggle';

const Header = () => {
  return (
    <>
      <header className="px-2 flex items-center justify-between bg-gray-800">
        <a href="#" className="uppercase font-bold text-gray-400">
          GraphiQL
        </a>
        <nav>
          <ul className="font-semibold text-gray-400">
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <a href="#">Welcome</a>
            </li>
            <li className="inline-block py-3 px-2">
              <LanguageToggle />
            </li>
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <a href="#">Sign Out</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
