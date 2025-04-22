import React from "react";
import Carousel from "../../components/Carousel";
import Story from "../../components/Story";
import Cheif from "../../components/Cheif";
import FoodCarousel from "../../components/FoodCarousel";
import Popularmenu from "../Home/Popularmenu";
import FreshItems from "../Home/FreshItems";
import TopofMenu from "../Home/TopofMenu";
import Testimonials from "../Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Carousel />
      <FoodCarousel />
      <Popularmenu />
      <FreshItems />
      <Testimonials />
      <Cheif />
            <div className="text-center m-10  ">
                 <Story />
            </div>
       <TopofMenu/>     
    </div>
  );
};

export default Home;
