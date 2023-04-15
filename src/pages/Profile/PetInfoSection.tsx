import { useEffect, useState } from 'react';
import { PetInfo, PetInfoProps } from './PetInfo';
import { IAnimal, IBreed } from '../../interfaces/Animal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { getCurrentUser } from '../../controllers/userController';
import { auth } from '../../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthState } from '../../hooks/usePagination';

export const PetInfoSection = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const userID = useAuthState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getCurrentUser(userID);
        console.log(user);
        if (user !== null) {
          if (user.animals?.[0] !== undefined) {
            console.log(user.animals);
            setAnimals(user.animals);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userID]);

  return (
    <>
      {animals.length === 0 ? (
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
          {animals.map((animal) => (
            <SwiperSlide key={animal.id}>
              <PetInfo
                animal={animal}
                //breed=//{breeds.find(breed => breed.id === animal.id)?.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
