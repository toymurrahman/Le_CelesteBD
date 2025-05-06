import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full  min-h-[22rem] sm:min-h-[30rem] md:min-h-[38rem] bg-center bg-cover flex items-center justify-center  "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white px-4 text-center">
        <div className="z-10 max-w-[90%] sm:max-w-[80%] mx-auto space-y-4">
          <h2 className=" text-xl font-bold  tracking-wide">
            TASTY AND CRUNCHY
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-widest">
            RESTAURANT
          </h1>
          <p className="text-base   sm:text-lg max-w-xl mx-auto">
            Visit our menu to enjoy mouth watering food
          </p>

          <Link
            to="/menu"  // Update this to your menu route       
           
            className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-emerald-400  transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Explore Menu
            </span>
            <span className="absolute inset-0 border-2 border-emerald-400 rounded-full"></span>
          </Link>
       
        </div>
      </div>
    </div>
  );
};

export default Slide;
