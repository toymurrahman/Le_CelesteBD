import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import MenuCard from "../MenuCard";

const Popularmenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  });

  return (
    <section>
      <SectionTitle heading="Popular Menu" subHeading="-From Our Menu-" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto mb-10">
        {menu.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mb-10">
          <button className="group relative h-12 overflow-hidden rounded-md bg-gray-100 px-6 transition duration-300">
            <span className="relative z-10 text-gray-800 transition group-hover:text-white font-medium">
              Explore Menu
            </span>
            <div className="absolute inset-0 h-full w-0 bg-slate-700 transition-all duration-300 group-hover:w-full z-0" />
          </button>
      </div>

      
    </section>
  );
};

export default Popularmenu;
