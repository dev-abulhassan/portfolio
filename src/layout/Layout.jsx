import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import ScrollToTop from 'react-scroll-to-top';

const Layout = () => {
   return (
      <>
        <ScrollToTop
          smooth
        ></ScrollToTop>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
      </>
   );
};

export default Layout;