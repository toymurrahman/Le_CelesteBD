import React from "react";
import img from "../../assets/image/topitem.jpg";
import { Link } from "react-router-dom";
import AllButtons from "../../components/shared/AllButtons";
import SectionTitle from "../../components/shared/SectionTitle";

const TopofMenu = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-5 px-6"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative mb-10  max-w-6xl mx-auto text-center">
        <SectionTitle subHeading={'Check it out'} heading={'from our menu'} />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 ">
          <img
            src={img}
            alt="Menu Dish"
            className="w-full max-w-md shadow-lg rounded-md"
          />
          <div className="text-left max-w-xl">
            <p className="text-sm mb-2 text-gray-300">March 20, 2025</p>
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
            <Link to="/menu">
              <AllButtons
                variant="bannar-button"
                text="Explore Menu"
                
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopofMenu;
