import React, { useRef } from "react";
import { FaWineGlassAlt } from "react-icons/fa";
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
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Story = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="pb-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <SectionTitle heading="Our Story" subHeading="- Le CelesteBd -" />
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
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
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            {[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
              img7,
              img8,
              img9,
              img10,
              img11,
              img12,
              img13,
              img14,
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                  <figure>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Circle */}
          <div className="autoplay-progress absolute bottom-4 right-4 z-10">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent} className=" font-semibold absolute inset-0 flex items-center justify-center text-emerald-300 dark:text-emerald-400"></span>
          </div>
        </div>
      </div>

      {/* Progress Circle Styles */}
      <style jsx>{`
        .autoplay-progress {
          width: 48px;
          height: 48px;
        }

        .autoplay-progress svg {
          transform: rotate(-90deg);
          width: 100%;
          height: 100%;
        }

        .autoplay-progress circle {
          fill: none;
          stroke: #10b981;
          stroke-width: 4;
          stroke-dasharray: 126;
          stroke-dashoffset: calc(126 * var(--progress, 1));
          transition: stroke-dashoffset 0.2s;
        }
      `}</style>
    </section>
  );
};

export default Story;
