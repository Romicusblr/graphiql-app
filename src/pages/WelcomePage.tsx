import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/slices/userSlice';

function WelcomePage() {
  const user = useAppSelector(selectUser);

  return (
    <div className="flex flex-col w-full grow justify-center items-center absolute h-full bg-gradient-to-t from-gray-800 from-7% via-gray-600 via-10%">
      <h1 className="text-8xl font-bold text-gray-800">GraphiQL</h1>
      <div>
        <h3>User:</h3>
        <p>Id {user.id}</p>
        <p>Email {user.email}</p>
        <p>Token {user.token?.slice(0, 20)}</p>
      </div>
    </div>
  );
}

export default WelcomePage;
