import React from "react";
import img1 from "../assets/image/story1.jpg";
import img2 from "../assets/image/story2.jpg";
import SectionTitle from './shared/SectionTitle';

const Story = () => {
  return (
    <section>
        <SectionTitle heading="Our Story" subHeading="-From the Kitchen-" />
      <div className="gap-6 flex flex-col items-center justify-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex gap-6 justify-center items-center">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Story;
