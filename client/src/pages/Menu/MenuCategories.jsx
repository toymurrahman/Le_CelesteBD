
import { Link } from "react-router-dom";
import AllButtons from "../../components/shared/AllButtons";
import MenuCard from "./MenuCard";

const MenuCategories = ({ items, category }) => {
  console.log(category);
  return (
   <section>
   
     <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto mb-10 px-10">
      {items.map((item) => (
        <MenuCard key={item._id} item={item} />
      ))}
    </div>
    <div className="text-center -mt-2 mb-10">
          <Link to={`/order/${category}`} >
            <AllButtons variant="common-button" text="Order Now" />
          </Link>
        </div>
   </section>
  );
};

export default MenuCategories;
