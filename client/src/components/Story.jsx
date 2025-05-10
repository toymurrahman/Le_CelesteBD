import React from "react";
import { FaUtensils, FaWineGlassAlt } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import img1 from "../assets/foodCarousel/port-fi-1.jpg";
import img2 from "../assets/foodCarousel/port-fi-2.jpg";
import img3 from "../assets/foodCarousel/port-fi-3.jpg";
import img4 from "../assets/foodCarousel/port-fi-4.jpg";
import img5 from "../assets/foodCarousel/port-fi-5.jpg";
import img6 from "../assets/foodCarousel/port-fi-6.jpg";
import img7 from "../assets/foodCarousel/port-fi-7.jpg";
import img8 from "../assets/foodCarousel/port-fi-8.jpg";
import img9 from "../assets/foodCarousel/port-fi-9.jpg";
import img10 from "../assets/foodCarousel/port-fi-10.jpg";
import img11 from "../assets/foodCarousel/port-fi-11.jpg";
import img12 from "../assets/foodCarousel/port-fi-12.jpg";
import img13 from "../assets/foodCarousel/port-fi-13.jpg";
import img14 from "../assets/foodCarousel/port-fi-14.jpg";
import SectionTitle from "./shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
;


const Story = () => {
  return (
    <section className="pb-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <SectionTitle heading="Our Story" subHeading="- Le CelesteBd -" />
      <div className="flex justify-center mb-8">
      </div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <div className="text-center lg:text-left space-y-6 max-w-2xl px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-3 justify-center lg:justify-start text-gray-800 dark:text-gray-100">
            Crafted With Passion
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            At{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Le CelesteBd
            </span>
            , we believe every dish should be a story on its own. From our
            signature fusion platters to elegant desserts, every creation is a
            celebration of culture and creativity.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 text-emerald-600 dark:text-emerald-400 text-xl sm:text-2xl">
            <MdRestaurantMenu title="Menu" />
            <FaWineGlassAlt title="Drinks" />
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <Swiper
            effect="cards"
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
          >
            {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14].map(
              (img, index) => (
                <SwiperSlide key={index}>
                  <div className="card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <figure>
                      <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-full h-64"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Story;
