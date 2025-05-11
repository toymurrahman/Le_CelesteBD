import React, { useRef, useState } from "react";
import FoodCard from "../../components/shared/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Helper function to group items into chunks of 6
const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

const OrderTab = ({ items }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = chunkArray(items, 6);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handleGoToSlide = (index) => {
    if (swiperRef.current) swiperRef.current.slideTo(index);
  };

  return (
    <div className="m-10 p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white bg-white text-gray-900">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-2">
              {group.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Buttons */}
      <div className="flex justify-center mt-8 space-x-2 flex-wrap">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 0
              ? "bg-emerald-600 text-gray-500 cursor-not-allowed"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
          }`}
        >
          Prev
        </button>

        {/* Numbered Page Buttons */}
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleGoToSlide(index)}
            disabled={index === activeIndex}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              index === activeIndex
                ? "bg-emerald-700 text-white cursor-not-allowed"
                : "bg-emerald-400 hover:bg-emerald-600 text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={activeIndex === slides.length - 1}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === slides.length - 1
              ? "bg-emerald-600 text-gray-500 cursor-not-allowed"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderTab;
