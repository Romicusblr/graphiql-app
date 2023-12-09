import { FC, ReactNode } from 'react';
import Footer from './Footer';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col container mx-auto px-3 min-h-screen">
      <main className="flex justify-center items-center grow relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
