import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container mx-auto px-3 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-8xl font-bold text-gray-600">404</h2>
      <p className="text-2xl mt-4 text-gray-600">
        {(error as { message?: string })?.message || (error as { statusText?: string })?.statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
