import { useEffect, useState } from 'react';
import { PetInfo } from './PetInfo';
import { IAnimal } from '../../interfaces/Animal';
import { IUser } from '../../interfaces/User';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

type PetInofSectionType = {
  user: IUser;
};

export const PetInfoSection: React.FC<PetInofSectionType> = ({ user }) => {
  // const [animals, setAnimals] = useState<IAnimal[]>([]);

  // useEffect(() => {
  //   if (user.animals) {
  //     setAnimals(user.animals);
  //   }
  // }, []);

  return (
    <>
      {user.animals?.length === 0 ? (
        <div
          className="w-[100%] flex items-center justify-center bg-dark_green border-[2px] 
          border-green rounded-[20px] py-[30px]"
        >
          <h2 className="text-[32px] font-semibold text-center">
            Jeszcze nie dodałeś pupila!
          </h2>
        </div>
      ) : (
        <Swiper modules={[Pagination]} spaceBetween={100} slidesPerView={3}>
          {user.animals?.map((animal) => (
            <SwiperSlide key={animal.id}>
              <PetInfo animal={animal} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
