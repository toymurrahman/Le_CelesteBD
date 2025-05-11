import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import FoodCard from "../../components/shared/FoodCard";
import useAxiosPublic from "./../../hooks/useAxiosPublic";

const SpecialRecipe = () => {
  const [item, setItem] = useState([]);
  const axiosPbulic = useAxiosPublic();

  useEffect(() => {
    axiosPbulic.get("/menu").then((res) => setItem(res.data));
  });
  const popular = item.filter((item) => item.category === "popular");
  return (
    <section className="m-5 ">
      <SectionTitle
        heading={"Cheif Special"}
        subHeading={"TAsty and crunchy"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">
        {popular.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default SpecialRecipe;
