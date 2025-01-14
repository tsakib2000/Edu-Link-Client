// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";
import slide5 from "../../assets/slide-5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="mb-5">
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
        <SwiperSlide>
          <div className="h-[450px] w-full">
            <img className="w-full h-full object-cover" src={slide1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] w-full">
            <img className="w-full h-full object-cover" src={slide2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] w-full">
            <img className="w-full h-full object-cover" src={slide3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] w-full">
            <img className="w-full h-full object-cover" src={slide4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[450px] w-full">
            <img className="w-full h-full object-cover" src={slide5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
