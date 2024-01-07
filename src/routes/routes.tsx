import { createBrowserRouter, redirect } from 'react-router-dom';
import NotFoundPage from '@/components/NotFoundPage';
import { ErrorBoundary } from '@/components/ErrorBoundary/errorBoundary';
import { CodeEditor } from '@/features/editor/Editor';
import Logout from '@/features/auth/Logout';
import Register from '@/features/auth/Register';
import Login from '@/features/auth/Login';
import WelcomePage from '@/components/WelcomePage';
import Layout from '@/components/Layout';
import ErrorPage from '@/components/ErrorPage';
import store from '@/app/store';

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
  const { auth: user } = store.getState();
  
  return null;
  if (!user) {
    return redirect('/login');
  }
}

export const router = createBrowserRouter(routes);
