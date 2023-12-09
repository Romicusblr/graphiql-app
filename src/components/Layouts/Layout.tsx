import { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col container mx-auto px-3 min-h-screen">
      <main className="flex justify-center items-center grow">{children}</main>
      <footer className="shrink-0">Footer</footer>
    </div>
  );
};

export default Layout;
