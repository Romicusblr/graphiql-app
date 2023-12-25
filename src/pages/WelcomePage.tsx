import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/slices/userSlice';
import { NavLink } from 'react-router-dom';

function WelcomePage() {
  const user = useAppSelector(selectUser);

  return (
    <div className="flex flex-col w-full grow justify-center items-center absolute h-full bg-gradient-to-t from-gray-800 from-7% via-gray-600 via-10%">
      <h1 className="text-8xl font-bold text-gray-800">GraphiQL</h1>
      {user && (
        <NavLink
          className="mt-4 text-4xl uppercase font-bold text-gray-800 animate-pulse"
          to={'/app'}
        >
          Go to app
        </NavLink>
      )}
    </div>
  );
}

export default WelcomePage;
