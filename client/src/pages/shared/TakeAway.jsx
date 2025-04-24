import React from 'react';
import bgImg from '../../assets/Menu/take-away-bg.jpg'
import img from '../../assets/Menu/take-away.png'
import { Link } from 'react-router-dom';

const TakeAway = () => {
    return (
        <section
        className="relative bg-fixed bg-cover bg-center text-black py-10 px-6"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <p className=" tracking-widest ">---Now you can---</p>
          <h2 className="text-3xl uppercase lg:text-4xl font-bold  border-t border-b inline-block py-2 px-6">
            take away food
          </h2>
  
          <div className="flex flex-col lg:flex-col items-center justify-center gap-5">
          <div className=" max-w-xl text-black">
              <p className="mb-2 ">
                Discover a curated selection of our most popular bites — crafted
                with fresh ingredients and bursting with flavor. 
              </p>
              {/* Common Transparent Btn */}
              <Link
              to="/order"  // Update this to your menu route             
              className="relative inline-flex items-center justify-center  px-5 py-3 overflow-hidden font-bold rounded-full group">
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                Order Now
              </span>
              <span className="absolute inset-0 border-2 border-black rounded-full"></span>
            </Link>
  
            </div>
            <img
              src={img}
              alt="TakeOut"  
            />
           
          </div>
        </div>
      </section>
    );
};

export default TakeAway;