import React from "react";
import chefImage from "../assets/image/cheif.jpg";

const Cheif = () => {
  return (
    <div>
      <section className="bg-gray-50 py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <p className="uppercase text-sm tracking-widest mb-2">
            PASSION & PRECISION
          </p>
          <h2 className="text-4xl font-bold  mb-4">Meet Our Chef</h2>
          <p className=" mb-6">
            With years of culinary experience and a passion for perfection, our
            chef brings creativity and excellence to every dish. From selecting
            the freshest ingredients to plating with finesse, each meal is a
            reflection of dedication to taste and quality.
          </p>

          <div>
            <button className="group relative h-12 overflow-hidden rounded-md bg-gray-100 px-6 transition duration-300">
              <span className="relative z-10 text-gray-800 transition group-hover:text-white font-medium">
                Explore Menu
              </span>
              <div className="absolute inset-0 h-full w-0 bg-slate-700 transition-all duration-300 group-hover:w-full z-0" />
            </button>
          </div>
        </div>

        {/* Chef Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={chefImage}
            alt="Chef"
            className="w-full max-w-xs lg:max-w-sm object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Cheif;
