import clsx from "clsx";

const AllButtons = ({
  variant = "common-button",
  text = "Click Me",
  onClick,
  type = "",
  className = "",
  disable = false, 
}) => {
  const isBannar = variant === "bannar-button";

  const baseClass = isBannar
    ? "relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-bold rounded-full group"
    : "group relative h-10 overflow-hidden rounded-md bg-gray-100 px-4 transition duration-300";

  const mergedClass = clsx(baseClass, className, {
    "opacity-50 cursor-not-allowed": disable, 
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={mergedClass}
      disabled={disable} 
    >
      {isBannar ? (
        <>
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]" />
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8" />
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            {text}
          </span>
          <span className="absolute inset-0 border-2 border-white rounded-full" />
        </>
      ) : (
        <>
          <span className="relative z-10 text-gray-800 transition group-hover:text-white font-medium">
            {text}
          </span>
          <div className="absolute inset-0 h-full w-0 bg-slate-700 transition-all duration-300 group-hover:w-full z-0" />
        </>
      )}
    </button>
  );
};

export default AllButtons;


/*
common btn
  <button className="group relative h-12 overflow-hidden rounded-md bg-gray-100 px-6 transition duration-300">
              <span className="relative z-10 text-gray-800 transition group-hover:text-white font-medium">
                Explore Menu
              </span>
              <div className="absolute inset-0 h-full w-0 bg-slate-700 transition-all duration-300 group-hover:w-full z-0" />
            </button>




            <button
            className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Read More
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </button>

*/
