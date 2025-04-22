import React from "react";
import img from "../../assets/image/topitem.jpg";
import { Link } from "react-router-dom";

const TopofMenu = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-20 px-6"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <p className=" tracking-widest mb-2">---Check it out---</p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 border-t border-b inline-block py-3 px-6">
          FROM OUR MENU
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
          <img
            src={img}
            alt="Menu Dish"
            className="w-full max-w-md shadow-lg rounded-md"
          />
          <div className="text-left max-w-xl">
            <p className="text-sm mb-2 text-gray-300">March 20, 2023</p>
            <h3 className="text-xl font-semibold mb-4">
              WHERE CAN I GET SOME?
            </h3>
            <p className="text-gray-200 mb-6">
              Discover a curated selection of our most popular bites — crafted
              with fresh ingredients and bursting with flavor. Whether you're
              craving something savory or sweet, our menu offers a perfect dish
              for every palate.
            </p>
            {/* Common Transparent Btn */}
            <Link
            to="/"  // Update this to your menu route             
            className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Read More
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TopofMenu;
