
import MenuCard from "./MenuCard";

const MenuCategories = ({ items }) => {
  return (
   <section>
   
     <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto mb-10 px-10">
      {items.map((item) => (
        <MenuCard key={item._id} item={item} />
      ))}
    </div>
   </section>
  );
};

export default MenuCategories;
