import React, { ReactElement } from 'react';
import { Navbar } from 'components/Navbar';

const MainLayout: React.FC = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Navbar />
      <div className="px-5 py-5">{children}</div>
    </div>
  );
};

export { MainLayout };
