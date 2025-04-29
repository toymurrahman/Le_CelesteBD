import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import FoodCard from "../../components/shared/FoodCard";

const SpecialRecipe = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  });
  const popular = item.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle
        heading={"Cheif Special"}
        subHeading={"TAsty and crunchy"}
      ></SectionTitle>
      <div className="grid grid-cols-1 m-10 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {popular.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default SpecialRecipe;
