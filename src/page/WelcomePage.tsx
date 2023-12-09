import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-8xl font-bold text-gray-600">GraphiQL</h1>
      <Link to={'login'} className="text-2xl mt-5 text-gray-600 underline">
        Click here to start
      </Link>
    </div>
  );
}

export default WelcomePage;
