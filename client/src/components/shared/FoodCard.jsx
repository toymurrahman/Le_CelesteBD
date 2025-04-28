import React from "react";
import AllButtons from "./AllButtons";

const FoodCard = ({ item }) => {
  return (
    <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <figure className="relative">
        <img
          className="w-full rounded-2xl h-64 object-cover"
          src={item.image}
          alt={item.title}
        />
        <p className="absolute top-3 right-3 text-lg font-semibold bg-black bg-opacity-70 text-white px-4 py-1 rounded-md  shadow">
          ${item.price}
        </p>
      </figure>

      <div className="card-body rounded-md">
        <p>
          {" "}
          {item.date} / {item.category}{" "}
        </p>
        <h2 className="card-title">{item.title}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-start">
          <div className="mt-2">
            <AllButtons
              variant="common-button"
              text="Add To Cart"
              className="uppercase"
            ></AllButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
