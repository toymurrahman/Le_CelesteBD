import SectionTitle from "../../components/shared/SectionTitle";
import MenuCard from "../Menu/MenuCard";
import useMenu from "../../hooks/useMenu";
import LoadinPan from "../../components/shared/LoadinPan";


const Popularmenu = () => {
  const [menu,loading] =useMenu();
  const polular = menu.filter((item) => item.category === "popular");

  if(loading) return <LoadinPan/>;

  return (
    <section>
      <SectionTitle heading="Popular Menu" subHeading="-From Our Menu-" />
      <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto ">
        {polular.map((item) => (
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
