import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="flex flex-col w-full grow justify-center items-center absolute h-full bg-gradient-to-t from-gray-800 from-7% via-gray-600 via-10%">
      <h1 className="text-8xl font-bold text-gray-800">GraphiQL</h1>
      <Link
        to={'login'}
        className="text-2xl mt-5 text-gray-600 underline hover:text-blue-800 transition duration-200"
      >
        Click here to start
      </Link>
    </div>
  );
}

export default WelcomePage;
