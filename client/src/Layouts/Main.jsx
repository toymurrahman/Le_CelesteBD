import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import Carousel from "../components/Carousel";

const Main = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
      <Navbar />
      {isHome && <Carousel />}

      
        <Outlet />
     

      <Footer />
    </div>
  );
};

export default Main;
