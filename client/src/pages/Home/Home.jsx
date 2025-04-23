import React from "react";
import Carousel from "../../components/Carousel";
import Story from "../../components/Story";
import Cheif from "../../components/Cheif";
import FoodCarousel from "../../components/FoodCarousel";
import Popularmenu from "./Popularmenu";
import FreshItems from "./FreshItems";
import TopofMenu from "./TopofMenu";
import Testimonials from "./Testimonials";
import SpecialRecipe from "./SpecialRecipe";


const Home = () => {
  return (
   <section>

     <div className="flex flex-col gap-5">
      <Carousel />
      <FoodCarousel />
      <Popularmenu />
      <FreshItems />
      <Testimonials />
      <Cheif />
      <SpecialRecipe />
      <TopofMenu />
      <Story />
    </div>
   </section>
  );
};

export default Home;
