import React from "react";
import img1 from "../assets/image/story1.jpg";
import img2 from "../assets/image/story2.jpg";
import SectionTitle from "./shared/SectionTitle";

const Story = () => {
  return (
    <section className=" py-8  bg-gray-100">
      <SectionTitle heading="Our Story" subHeading="-From the Kitchen-" />
      <div className="gap-6 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <img
            src={img1}
            alt="Story 1"
            className="w-60 sm:w-72 rounded shadow-md"
          />
          <img
            src={img2}
            alt="Story 2"
            className="w-60 sm:w-72 rounded shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
