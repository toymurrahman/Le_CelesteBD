import React from "react";
import chefImage from "../assets/image/cheif.jpg";
import AllButtons from "./shared/AllButtons";
import { Link } from "react-router-dom";
import SectionTitle from "./shared/SectionTitle";

const Cheif = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <SectionTitle
            subHeading="PASSION & PRECISION"
            heading="Meet Our Chef"
          />
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
            With years of culinary experience and a passion for perfection, our
            chef brings creativity and excellence to every dish. From selecting
            the freshest ingredients to plating with finesse, each meal is a
            reflection of dedication to taste and quality.
          </p>
          <Link to="/about">
            <AllButtons variant="common-button" text="Contact Us" />
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-emerald-200 dark:border-emerald-700">
            <img
              src={chefImage}
              alt="Chef"
              className="w-full max-w-xs lg:max-w-sm object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cheif;
