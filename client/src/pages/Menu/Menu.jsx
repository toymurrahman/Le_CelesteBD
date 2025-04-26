import React from "react";
import { Helmet } from "react-helmet-async";
import CoverForAll from "../../components/shared/CoverForAll";
import menuImg from "../../assets/Menu/menu-banner.jpg";
import dessertImg from "../../assets/Menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/Menu/pizza-bg.jpg";
import saladImg from "../../assets/Menu/salad-bg.jpg";
import soupImg from "../../assets/Menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/shared/SectionTitle";
import MenuCategories from "./MenuCategories";
import CoverParallax from "../../components/shared/CoverParallax";
import TakeAway from "../shared/TakeAway";
import AllButtons from "../../components/shared/AllButtons";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <section>
      <div>
        <Helmet>
          <title>Menu | Le CelesteBD</title>
        </Helmet>
      </div>
      {/* main banner */}
      <div>
        <CoverForAll
          img={menuImg}
          title={"Our menu"}
          sub_title={
            "Lets Explore our delicious menu and grab all of it. Bet You can not eat less "
          }
        ></CoverForAll>
      </div>

      {/* offer section */}
      <div>
        <SectionTitle
          heading={"today's offer"}
          subHeading={"Don't miss"}
        ></SectionTitle>
        <MenuCategories category='offered' items={offered}></MenuCategories>
      </div>

      {/* Dessert section */}
      <div>
        <CoverParallax
          parallaxImg={dessertImg}
          categories={"Dessert"}
          description={"Look at our desser section menu"}
        ></CoverParallax>
        <MenuCategories category='dessert' items={dessert}></MenuCategories>
      </div>
      

      {/* pizza section */}
      <div>
        <CoverParallax
          parallaxImg={pizzaImg}
          categories={"Pizza"}
          description={"Look at our pizza section menu"}
        ></CoverParallax>
        <MenuCategories category='pizza' items={pizza}></MenuCategories>
      </div>
      <div>
        <CoverParallax
          parallaxImg={saladImg}
          categories={"salad"}
          description={"Look at our salad section menu"}
        ></CoverParallax>
        <MenuCategories category='salad' items={salad}></MenuCategories>
      </div>
      <div>
        <CoverParallax
          parallaxImg={soupImg}
          categories={"Soup"}
          description={"Look at our soup section menu"}
        ></CoverParallax>
        <MenuCategories category='Soup' items={soup}></MenuCategories>
        
      </div>
      {/* take away */}
      <TakeAway />
    </section>
  );
};

export default Menu;
