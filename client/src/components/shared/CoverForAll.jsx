import { Parallax } from "react-parallax";
const CoverForAll = ({ img, title, sub_title }) => {
  return (
    <Parallax blur={{ min: -20, max: 20 }} bgImage={img} strength={-200}>
      <div className="hero h-[500px] mb-5 ">
        <div className="text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 uppercase   text-5xl font-bold"> {title} </h1>
            <p className="mb-5 text-white ">{sub_title}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default CoverForAll;
