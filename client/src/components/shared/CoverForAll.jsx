import { Parallax } from "react-parallax";
const CoverForAll = ({ img, title, sub_title }) => {
  return (
    <Parallax
      blur={{ min: -40, max: 40 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[500px] mb-5"
       
      >
        <div className="hero "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 uppercase text-5xl font-bold"> {title} </h1>
            <p className="mb-5">{sub_title}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default CoverForAll;
