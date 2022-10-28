import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import StarRating from "../commons/StarRating";

import avatar from "../../assets/images/avatar.png";

const CustomSlide = () => {

  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
      </Swiper>
    </>
  );
}

const Slide = () => {
  return (
    <div className="w-[450px] h-[250px] flex justify-between items-center bg-orange/70 border-2 border-green rounded-[10px] py-[60px] px-[20px]">
      <img src={avatar} alt="avatar" className="w-[150px] h-[150px] radius-full"/>
      <div className="text-left">
        <StarRating type="static" active={4} size="h-[30px] w-[30px]" alignment="text-left" rates="15"/>
        <p className="text-[14px] w-[230px] mt-[10px] ml-[10px] text-left">To jest naprawdę cudowny sklep. Polecam każdemu właścicelu zwierzątka domowego.</p>
      </div>
    </div>
  )
}

export default CustomSlide;