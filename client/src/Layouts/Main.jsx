import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import Carousel from "../components/Carousel";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Carousel />

      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
