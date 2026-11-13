import React from 'react';
import Navbar from '../Components/Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
