import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Layout = () => {
   return (
      <>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
      </>
   );
};

export default Layout;