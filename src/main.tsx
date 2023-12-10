import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';

import './index.css';
import App from './App';
import ErrorPage from './page/ErrorPage';
import WelcomePage from './page/WelcomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <WelcomePage />,
      },
      {
        path: 'main',
        element: <div>Edit</div>,
      },
      {
        path: 'login',
        element: <div>Sign In / Sign Up</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
<App />;
