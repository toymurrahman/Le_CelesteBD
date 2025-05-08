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
import Lottie from "lottie-react";
import storyAnimation from "../../public/frypan-loading.json";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import AllButtons from "./shared/AllButtons";

const MySwal = withReactContent(Swal);

const handleMoreClick = () => {
  MySwal.fire({
    title: (
      <p className="text-xl text-emerald-600 font-semibold">
        About Le CelesteBd
      </p>
    ),
    html: (
      <div className="text-left text-gray-900">
        <p>
          <strong>Le CelesteBd</strong> blends local warmth with culinary
          elegance. Our story begins in the heart of Dhaka, where flavors meet
          finesse. We are proud to serve handcrafted dishes, ethically sourced
          ingredients, and unforgettable ambiance.
        </p>
      </div>
    ),
    icon: "info",
    confirmButtonText: "Explore More",
    confirmButtonColor: "#10B981",
  });
};

const Story = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-base-100">
      <SectionTitle heading="Our Story" subHeading="- Le CelesteBd -" />

      <div className="flex justify-center mb-6">
        <Lottie
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-lg border-2 border-emerald-100 p-2"
          animationData={storyAnimation}
          loop
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 max-w-2xl px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-3 justify-center lg:justify-start">
            <FaUtensils className="text-emerald-500" /> Crafted With Passion
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            At{" "}
            <span className="font-semibold text-emerald-600">Le CelesteBd</span>,
            we believe every dish should be a story on its own. From our
            signature fusion platters to elegant desserts, every creation is a
            celebration of culture and creativity.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 text-emerald-500 text-xl sm:text-2xl">
            <MdRestaurantMenu title="Menu" />
            <FaWineGlassAlt title="Drinks" />
          </div>
          <div className="flex justify-center lg:justify-start">
            <AllButtons onClick={handleMoreClick} text="Learn More" />
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <Swiper
            effect="cards"
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="card shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <figure>
                    <img
                      src={img}
                      alt={`Story Slide ${index + 1}`}
                      className="rounded-xl object-cover w-full h-64"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Story;
