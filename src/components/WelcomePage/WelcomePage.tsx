import { useAppSelector } from '@/hooks/store';
import { selectUser } from '@/features/auth/authSlice';
import { NavLink } from 'react-router-dom';

function WelcomePage() {
  const user = useAppSelector(selectUser);

  return (
    <div className="text-gray-800 flex flex-col w-full grow justify-center items-center absolute h-full bg-gradient-to-t from-gray-800 from-7% via-gray-600 via-10%">
      <h1 className="text-8xl font-bold ">GraphiQL</h1>
      <p className="font-base mt-2">is a playground/IDE for graphQL requests</p>
      <p className="font-base">React 2023 Q4</p>
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
