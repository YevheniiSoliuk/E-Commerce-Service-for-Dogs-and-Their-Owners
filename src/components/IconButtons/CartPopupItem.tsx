import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementProductAmount, incrementProductAmount, removePosition } from '../../features/ordering/ProductCartSlice';
import { IOrderPosition } from '../../interfaces/Order';
import { AppDispatch } from '../../store/store';
import { Button } from '../commons/Button/Button';

export const CartPopupItem: React.FC<IOrderPosition> = ({product, amount}) => {
  const {id, photos, title, price, base_price, discount_price, discount_amount} = {...product};
  const dispatch: AppDispatch = useDispatch();
  
  return (
    <section className="flex justify-start items-end relative mb-[30px]">
      <span 
        className="absolute text-[30px] left-[420px] top-0 hover:text-yellow cursor-pointer" 
        onClick={()=>{dispatch(removePosition(id))}}
      >&times;</span>
      {photos ? 
        <img 
          src={photos?.[0]} 
          alt={""} 
          className="w-[30%]"
        /> :
        <img 
          src={"../images/product-image.jpg"} 
          alt="product" 
          className="w-[30%]"
        />
      }
      <div className="w-[40%] ml-[20px]">
        <h3 className="mb-[10px] text-[14px]">{title}</h3>
        {discount_price !== undefined && discount_price !== null && discount_amount ? 
          <p className="text-dark_red text-[16px] mb-[5px]">{price - discount_price} zł</p> :
          <p className="text-dark_red text-[16px] mb-[5px]">{price} zł</p>
        } 
        <p className="mb-[20px] text-[14px]">({base_price} zł/kg)</p>
      </div>
      <div className="flex items-center">
        <Button 
          text={'-'} 
          value={'decrement'} 
          styles="h-[40px] bg-orange border-2 border-green hover:border-yellow rounded-full 
          text-green text-base font-lemon w-[40px]"
          onClick={()=>{dispatch(decrementProductAmount(id))}}
        />
        <span className="text-[14px] mx-[10px]">{amount}</span>
        <Button 
          text={'+'} 
          value={'increment'} 
          styles="h-[40px] bg-orange border-2 border-green hover:border-yellow rounded-full 
          text-green text-base font-lemon w-[40px]" 
          onClick={()=>{dispatch(incrementProductAmount(id))}}
        />
      </div>
      <div className="absolute w-[450px] h-[1px] bg-green top-[145px]"></div>
    </section>
  );
}