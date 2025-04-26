import SectionTitle from "../../components/shared/SectionTitle";
import MenuCard from "../Menu/MenuCard";
import useMenu from "../../hooks/useMenu";
import LoadinPan from "../../components/shared/LoadinPan";
import AllButtons from "../../components/shared/AllButtons";
import { Link } from "react-router-dom";

const Popularmenu = () => {
  const [menu, loading] = useMenu();
  const polular = menu.filter((item) => item.category === "popular");

  if (loading) return <LoadinPan />;

  return (
    <section>
      <SectionTitle heading="Popular Menu" subHeading="-From Our Menu-" />
      <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto ">
        {polular.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mb-10">
        <Link to='/menu'>
          <AllButtons variant="common-button" text="Explore Menu" />
        </Link>
      </div>
    </section>
  );
};

export default Popularmenu;
