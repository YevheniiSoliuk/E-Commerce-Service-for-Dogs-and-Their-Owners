import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementProductAmount, incrementProductAmount, removePosition } from '../../features/ordering/ProductCartSlice';
import { IOrderPosition } from '../../interfaces/Order';
import { AppDispatch } from '../../store/store';
import Button from '../commons/Button/Button';

const CartPopupItem = ({product, amount}: IOrderPosition) => {

  const {id, photos, title, price, basePrice} = {...product};

  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="flex justify-between items-end relative mb-[30px]">
      <span className="absolute text-[30px] left-[420px] top-0 hover:text-yellow cursor-pointer" onClick={()=>{dispatch(removePosition(id))}}>
          &times;
      </span>
      <img src={photos?.[0]} alt={""} className="w-[30%]"/>
      <div className="">
        <h3 className="mb-[10px] text-[14px]">{title}</h3>
        <p className="text-dark_red text-[16px] mb-[5px]">{price} zł</p>
        <p className="mb-[20px] text-[14px]">({basePrice} zł/kg)</p>
      </div>
      <div className="flex items-center">
        <Button text={'-'} value={'decrement'} styles={'h-[40px] bg-orange border-2 border-green hover:border-yellow rounded-full text-green text-base font-lemon w-[40px]'} onClick={()=>{dispatch(decrementProductAmount(id))}}/>
        <span className="text-[14px] mx-[10px]">{amount}</span>
        <Button text={'+'} value={'increment'} styles={'h-[40px] bg-orange border-2 border-green hover:border-yellow rounded-full text-green text-base font-lemon w-[40px]'} onClick={()=>{dispatch(incrementProductAmount(id))}}/>
      </div>
      <div className="absolute w-[450px] h-[1px] bg-green top-[145px]"></div>
    </div>
  );
};

export default CartPopupItem;