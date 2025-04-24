

const CoverParallax = ({parallaxImg,categories,description}) => {
    return (
        <section
        className="relative bg-fixed bg-cover bg-center mb-5 text-white py-20 px-6"
        style={{ backgroundImage: `url(${parallaxImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative p-6 max-w-6xl bg-black bg-opacity-40 mx-auto text-center">
          <h2 className="text-3xl uppercase lg:text-5xl font-bold mb-10  inline-block border-b py-3 px-6">
            {categories}
          </h2>
          <p className=" tracking-widest mb-2 "> - {description} -</p>
        </div>
      </section>
    );
};

export default CoverParallax;