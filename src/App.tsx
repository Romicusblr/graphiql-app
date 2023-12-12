import './index.css';
import { Outlet } from 'react-router-dom';
import Layout from '@/components/Layout';
import { LocalizationProvider } from '@/context/LocalizationContext';

const App = () => {
  return (
    <LocalizationProvider>
      <Layout>
        <Outlet />
      </Layout>
    </LocalizationProvider>
  );
};

export default App;
