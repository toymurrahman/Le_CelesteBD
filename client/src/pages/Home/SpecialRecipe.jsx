import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import FoodCard from "../../components/shared/FoodCard";

const SpecialRecipe = () => {
    const [item, setItem]= useState([]);

    useEffect(()=>{
        fetch("foods.json")
        .then(res => res.json())
        .then(data =>
            setItem(data)
        )
    })
  return (
    <section>
      <SectionTitle
        heading={"Cheif Special"}
        subHeading={"TAsty and crunchy"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mb-10">
        {
            item.map((item) => (
                <FoodCard key={item.id} item={item}></FoodCard>
            ))
        }
        
      </div>
    </section>
  );
};

export default SpecialRecipe;
