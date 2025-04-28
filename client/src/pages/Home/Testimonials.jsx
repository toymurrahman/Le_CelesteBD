import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import img from "../../assets/image/home1-main-parallax-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  });
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-10 px-6"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <SectionTitle
        subHeading={"What out Customer says"}
        heading={"TEstimonial"}
      />

      <div>
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col -mt-5 items-center justify-center text-center m-10 p-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />

                <p className="text-lg italic mb-4">{review.details}</p>
                <h3 className="text-xl font-bold">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
