// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Virtual } from 'swiper';

import { Slide } from './Slide';
import { IShopReviews } from '../../interfaces/Reviews';

type SliderProps = {
  data: IShopReviews[];
};

export const CustomSlider: React.FC<SliderProps> = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Virtual]}
        spaceBetween={50}
        slidesPerView={3}
        virtual
      >
        {data.map((review, index) => (
          <SwiperSlide key={review.reviewText} virtualIndex={index}>
            <Slide
              userName={review.userName}
              slideImageURL={review.userPhotoURL}
              rate={review.rate}
              date={'12-05-2023'}
              text={review.reviewText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
