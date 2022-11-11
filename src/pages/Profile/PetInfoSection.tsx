 import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import PetInfo, { PetInfoProps } from './PetInfo';

import dogAvatar1 from "../../assets/images/dog-avatar-1.png";
import dogAvatar2 from "../../assets/images/dog-avatar-2.png";
import dogAvatar3 from "../../assets/images/dog-avatar-3.png";


const dogs: PetInfoProps[] = [
  {src: dogAvatar1, index: "1", name: "Miśka", birthdate: "01.12.19r.", breed: "Chow-Chow", sex:"suka"}, 
  {src: dogAvatar2, index: "2", name: "Bobo", birthdate: "23.07.17r.", breed: "Bokser", sex:"pies"}, 
  {src: dogAvatar3, index: "3", name: "Rembo", birthdate: "10.11.21r.", breed: "Shiba", sex:"pies"}, 
  {src: dogAvatar2, index: "4", name: "Bobo", birthdate: "23.07.17r.", breed: "Bokser", sex:"pies"},
  {src: dogAvatar3, index: "5", name: "Rembo", birthdate: "10.11.21r.", breed: "Shiba", sex:"pies"},
  {src: dogAvatar1, index: "6", name: "Miśka", birthdate: "01.12.19r.", breed: "Chow-Chow", sex:"suka"},
]

const PetInfoSection = () => {
  return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={100}
        slidesPerView={3}
      >
        {dogs.map((dog)=>
          <SwiperSlide>
            <PetInfo src={dog.src} index={dog.index} name={dog.name} birthdate={dog.birthdate} breed={dog.breed} sex={dog.sex} />
          </SwiperSlide>
        )}
      </Swiper>
  );
};

export default PetInfoSection;