import './index.css';
import { Outlet } from 'react-router-dom';
import Layout from '@/components/Layout';
import { LocaleProvider } from '@/context/LocalizationContext';

const App = () => {
  return (
    <LocaleProvider>
      <Layout>
        <Outlet />
      </Layout>
    </LocaleProvider>
  );
};

export default App;
