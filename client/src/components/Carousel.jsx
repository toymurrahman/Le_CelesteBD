
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/Home-carousel/main-home-slide1.jpg';
import img2 from '../assets/Home-carousel/main-home-slide2n.jpg';
import img3 from '../assets/Home-carousel/main-home-slide3.jpg';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <div className="container   mx-auto  sm:block">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide> <Slide image={img1} text=''  /></SwiperSlide>
        <SwiperSlide> <Slide image={img2} text=''  /> </SwiperSlide>
        <SwiperSlide> <Slide image={img3} text=''  /> </SwiperSlide>

      
      </Swiper>
    </div>
  );
}