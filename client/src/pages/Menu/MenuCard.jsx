import React from 'react';


const MenuCard = ({item}) => {
    return (
   <section>
         <div  className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
            <img src={item.image} alt={item.name} style={{borderRadius: '10px 200px 200px 200px'}} className="w-16 h-16 rounded-full mr-4" />
            <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <hr />
                <p className="text-gray-500 w-4/5">{item.recipe.split(" ").slice(0, 6).join(" ")} . . .</p>
            </div>
        </div>
        <span className="text-xl font-bold -ml-10">${item.price}</span>
    </div>  
   </section>
    );
};

export default MenuCard;