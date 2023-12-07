import { useRouteError } from 'react-router-dom';

export default function Page404() {
  const error = useRouteError();

  return (
    <div>
      <h1>404</h1>
      <p>
        {(error as { message?: string })?.message || (error as { statusText?: string })?.statusText}
      </p>
    </div>
  );
}
