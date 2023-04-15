import { StarRating } from '../commons/StarRating';
import avatar from '../../assets/images/avatar.png';

export const Slide = () => {
  return (
    <div
      className="w-[450px] h-[250px] flex justify-between items-center bg-orange/70 border-2 
      border-green rounded-[10px] py-[60px] px-[20px]"
    >
      <img
        src={avatar}
        alt="avatar"
        className="w-[150px] h-[150px] radius-full"
      />
      <div className="text-left">
        <StarRating
          type="static"
          active={4}
          size="h-[30px] w-[30px]"
          alignment="text-left"
          rates="15"
        />
        <p className="text-[14px] w-[230px] mt-[10px] ml-[10px] text-left">
          To jest naprawdę cudowny sklep. Polecam każdemu właścicelu zwierzątka
          domowego.
        </p>
      </div>
    </div>
  );
};
