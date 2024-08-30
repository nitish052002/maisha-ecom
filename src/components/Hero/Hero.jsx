import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannerOne from "../../assets/Perfume_Desk (2).webp";
import bannerTwo from "../../assets/Flowers-essentials_Desk_updated.png";
import bannerThree from "../../assets/Monsoon_Desk.webp";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ 
          delay: 3000, // Time delay in milliseconds between slides
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bannerOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerOne} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
