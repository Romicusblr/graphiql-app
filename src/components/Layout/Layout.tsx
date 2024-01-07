import { FC } from 'react';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex bg-gray-600 justify-center items-center grow relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
