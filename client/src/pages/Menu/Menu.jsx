import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import CoverForAll from "../../components/shared/CoverForAll";
import menuImg from "../../assets/Menu/menu-banner.jpg";
import dessertImg from "../../assets/Menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/Menu/pizza-bg.jpg";
import burgerImg from "../../assets/Menu/burger-bg.jpg"
import saladImg from "../../assets/Menu/salad-bg.jpg";
import soupImg from "../../assets/Menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/shared/SectionTitle";
import MenuCategories from "./MenuCategories";
import CoverParallax from "../../components/shared/CoverParallax";
import TakeAway from "../shared/TakeAway";
import LoadinPan from "../../components/shared/LoadinPan";
import AllButtons from "../../components/shared/AllButtons";

const Menu = () => {
  const [menu, isLoading] = useMenu();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filterMenu = (category) => {
    if (category === "All") {
      return menu;
    }
    return menu.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  };
  if (isLoading) return <LoadinPan />;

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
            "Let's explore our delicious menu and grab all of it. Bet you can't eat less!"
          }
        />
      </div>
      <div className="container">
        <div>
          <SectionTitle heading={"Today's Offer"} subHeading={"Don't miss"} />
          <MenuCategories category="offered" items={filterMenu("offered")} />
        </div>

        {/* Category Buttons (for filtering) */}
        <div className="flex justify-center gap-6 mb-8">
          {["All", "dessert", "pizza", "burger" , "salad",  "soup"].map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-emerald-100"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Sections */}
        <div>
          {selectedCategory === "All" || selectedCategory === "dessert" ? (
            <div>
              <CoverParallax
                parallaxImg={dessertImg}
                categories={"Dessert"}
                description={"Look at our dessert section menu"}
              />
              <MenuCategories
                category="dessert"
                items={filterMenu("dessert")}
              />
            </div>
          ) : null}
          {selectedCategory === "All" || selectedCategory === "pizza" ? (
            <div>
              <CoverParallax
                parallaxImg={pizzaImg}
                categories={"Pizza"}
                description={"Look at our pizza section menu"}
              />
              <MenuCategories category="pizza" items={filterMenu("pizza")} />
            </div>
          ) : null}
          {selectedCategory === "All" || selectedCategory === "burger" ? (
            <div>
              <CoverParallax
                parallaxImg={burgerImg}
                categories={"burger"}
                description={"Look at our burger section menu"}
              />
              <MenuCategories category="pizza" items={filterMenu("burger")} />
            </div>
          ) : null}
          {selectedCategory === "All" || selectedCategory === "salad" ? (
            <div>
              <CoverParallax
                parallaxImg={saladImg}
                categories={"Salad"}
                description={"Look at our salad section menu"}
              />
              <MenuCategories category="salad" items={filterMenu("salad")} />
            </div>
          ) : null}
          {selectedCategory === "All" || selectedCategory === "soup" ? (
            <div>
              <CoverParallax
                parallaxImg={soupImg}
                categories={"Soup"}
                description={"Look at our soup section menu"}
              />
              <MenuCategories category="soup" items={filterMenu("soup")} />
            </div>
          ) : null}
        </div>
        <TakeAway />
      </div>
    </section>
  );
};

export default Menu;
