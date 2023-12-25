import { createBrowserRouter } from 'react-router-dom';

import NotFoundPage from '@/pages/NotFoundPage';
import { ErrorBoundary } from '@/components/ErrorBoundary/errorBoundary';
import { CodeEditor } from '@/pages/CodeEditor';
import Logout from '@/pages/Logout';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import WelcomePage from '@/pages/WelcomePage';
import Layout from '@/components/Layout';
import ErrorPage from '@/pages/ErrorPage';

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
  element: <ErrorBoundary fallback={<ErrorPage />}>{route.element}</ErrorBoundary>,
}));

export const router = createBrowserRouter(routes);
