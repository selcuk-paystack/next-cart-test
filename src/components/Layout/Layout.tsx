import React, { ReactElement } from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Navbar />
      <div className="px-5 py-5">{children}</div>
    </div>
  );
};

export default Layout;
