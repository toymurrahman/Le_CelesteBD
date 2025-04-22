import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from '../assets/foodCarousel/port-fi-1.jpg'
import img2 from '../assets/foodCarousel/port-fi-2.jpg'
import img3 from '../assets/foodCarousel/port-fi-3.jpg'
import img4 from '../assets/foodCarousel/port-fi-4.jpg'
import img5 from '../assets/foodCarousel/port-fi-5.jpg'
import img6 from '../assets/foodCarousel/port-fi-6.jpg'
import img7 from '../assets/foodCarousel/port-fi-7.jpg'
import img8 from '../assets/foodCarousel/port-fi-8.jpg'
import img9 from '../assets/foodCarousel/port-fi-9.jpg'
import img10 from '../assets/foodCarousel/port-fi-10.jpg'
import img11 from '../assets/foodCarousel/port-fi-11.jpg'
import img12 from '../assets/foodCarousel/port-fi-12.jpg'
import img13 from '../assets/foodCarousel/port-fi-13.jpg'
import img14 from '../assets/foodCarousel/port-fi-14.jpg'

import SectionTitle from './shared/SectionTitle';

const foodItems = [
    {
      src: img1,
      title: "Chicken Saslick",
      category: "CHICKEN",
    },
    {
      src: img2,
      title: "Crispy Burger",
      category: "Fast Food",
    },
    {
      src: img3,
      title: "Healthy Snacks",
      category: "Dessert",
    },
    {
      src: img4,
      title: "Healthy Sweet Bites",
      category: "Dessert",
    },
    {
      src: img5,
      title: "Classic Pizza",
      category: "PIZZA",
    },
    {
      src: img6,
      title: "Cheesy Delight",
      category: "PIZZA",
    },
    {
      src: img7,
      title: "Smoked Flavors",
      category: "BBQ",
    },
    {
      src: img8,
      title: "Gourmet Mix",
      category: "PLATTER",
    },
    {
      src: img9,
      title: "Veggie Bites",
      category: "VEGETARIAN",
    },
    {
      src: img10,
      title: "Classic Delight",
      category: "PIZZA",
    },
    {
      src: img11,
      title: "Spicy Chicken",
      category: "CHICKEN",
    },
    {
      src: img12,
      title: "BBQ Feast",
      category: "BBQ",
    },
    {
      src: img13,
      title: "Veggie Platter",
      category: "VEGETARIAN",
    },
    {
      src: img14,
      title: "Sweet Treats",
      category: "Dessert",
    },
  ];

const FoodCarousel = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay.start();
  };
  return (
    <div className="relative">
        <SectionTitle heading={'Features items'} subHeading={'TASTY AND CRUNCY'}  />
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
      >
        {foodItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative group h-64 overflow-hidden rounded-md"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-green-300 tracking-widest mt-1">
                  {item.category}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FoodCarousel;
