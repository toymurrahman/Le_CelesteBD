import React from "react";
import chefImage from "../assets/image/cheif.jpg";
import AllButtons from "./shared/AllButtons";
import { Link } from "react-router-dom";
import SectionTitle from "./shared/SectionTitle";

const Cheif = () => {
  return (
    <div>
      <section className=" py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <SectionTitle subHeading={'PASSION & PRECISION'} heading={'Meet Our Cheif'}/>
          <p className=" mb-4">
            With years of culinary experience and a passion for perfection, our
            chef brings creativity and excellence to every dish. From selecting
            the freshest ingredients to plating with finesse, each meal is a
            reflection of dedication to taste and quality.
          </p>

          <Link to='/menu'>
            <AllButtons
              variant="common-button"
              text="Read More"
            />
          </Link>
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
