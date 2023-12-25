import { createBrowserRouter, redirect } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFoundPage';
import { ErrorBoundary } from '@/components/ErrorBoundary/errorBoundary';
import { CodeEditor } from '@/pages/CodeEditor';
import Logout from '@/pages/Logout';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import WelcomePage from '@/pages/WelcomePage';
import Layout from '@/components/Layout';
import ErrorPage from '@/pages/ErrorPage';
import store from '@/store';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
      {
        path: 'app',
        loader: protectedLoader,
        element: <CodeEditor />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
].map((route) => ({
  ...route,
  element: (
    <ErrorBoundary fallback={<ErrorPage />}>{route.element}</ErrorBoundary>
  ),
}));

function protectedLoader() {
  const { user } = store.getState();

  if (!user) {
    return redirect('/login');
  }
  return null;
}

export const router = createBrowserRouter(routes);
