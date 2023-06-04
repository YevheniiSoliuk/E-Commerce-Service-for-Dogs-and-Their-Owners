import React from 'react';
import { StarRating } from '../commons/StarRating';
import avatar from '../../assets/images/avatar.png';

type SlideProps = {
  userName: string;
  date: string;
  slideImageURL: string;
  rate: number;
  text: string;
};

export const Slide: React.FC<SlideProps> = ({
  userName,
  date,
  slideImageURL,
  rate,
  text
}) => {
  return (
    <div
      className="w-[450px] h-[250px] flex justify-between items-center bg-orange/70 border-2 
      border-green rounded-[10px] py-[60px] px-[20px]"
    >
      <img
        src={slideImageURL ? slideImageURL : avatar}
        alt="avatar"
        className="w-[150px] h-[150px] radius-full"
      />
      <div className="text-left">
        <div className="flex justify-between items-center mb-[15px]">
          <h3 className="text-[20px] font-bold">{userName}</h3>
          <p className="text-[16px]">{date}</p>
        </div>
        <StarRating
          type="static"
          active={rate}
          size="h-[30px] w-[30px]"
          alignment="text-left"
        />
        <p className="text-[16px] w-[230px] mt-[10px] ml-[10px] text-left">
          {text}
        </p>
      </div>
    </div>
  );
};
