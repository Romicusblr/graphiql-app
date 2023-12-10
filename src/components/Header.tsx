import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="px-2 flex items-center justify-between bg-gray-800">
        <a href="/" className="uppercase font-bold text-gray-400">
          GraphiQL
        </a>
        <nav>
          <ul className="font-semibold text-gray-400">
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/'}>Welcome</NavLink>
            </li>
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/'}>Language Toggle</NavLink>
            </li>
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/login'}>Login</NavLink>
            </li>
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/register'}>Register</NavLink>
            </li>
            <li className="inline-block py-3 px-2 hover:text-gray-600">
              <NavLink to={'/logout'}>Logout</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
