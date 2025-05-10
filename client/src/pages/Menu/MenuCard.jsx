import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-emerald-100 dark:border-emerald-900 p-6 flex gap-6 items-center">
        <div className="min-w-[96px] h-20 w-20 rounded-2xl overflow-hidden shadow-sm border border-emerald-200 dark:border-emerald-700">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
               {item.title.split(" ").slice(0, 3).join(" ")}&hellip;
            </h3>
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
              ${item.price}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {item.description.split(" ").slice(0, 10).join(" ")}&hellip;
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
