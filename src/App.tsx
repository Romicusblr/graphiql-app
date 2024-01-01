import '@/index.css';
import { LocalizationProvider } from '@/context/LocalizationContext';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/routes';
import { Provider } from 'react-redux';
import store from '@/app/store';

const App = () => {
  return (
    <LocalizationProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </LocalizationProvider>
  );
};

export default App;
