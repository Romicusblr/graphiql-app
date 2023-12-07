import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Page404 from './page/Page404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Page404 />,
    children: [
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
