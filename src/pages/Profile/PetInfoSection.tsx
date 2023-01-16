import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useAnimalsQuery, useBreedsQuery } from '../../features/ApiAnimalsSlice';
import PetInfo, { PetInfoProps } from './PetInfo';
import { IAnimal, IBreed } from '../../interfaces/Animal';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const PetInfoSection = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [breeds, setBreeds] = useState<IBreed[]>([]);

  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const {data: animalsData} = useAnimalsQuery(userId);
  const {data: breedsData} = useBreedsQuery();

  useEffect(()=>{
    if(animalsData && breedsData)
    {
      setAnimals(animalsData[`Animals with user_id: ${userId}`]);
      setBreeds(breedsData["All breeds"]);
    }
  }, [animalsData, userId, breedsData])

  return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={100}
        slidesPerView={3}
      >
        {animals.map((animal)=>
          <SwiperSlide>
            <PetInfo 
              animal={animal}
              breed={breeds.find(breed => breed.id === animal.id)?.name} 
            />
          </SwiperSlide>
        )}
      </Swiper>
  );
};

export default PetInfoSection;