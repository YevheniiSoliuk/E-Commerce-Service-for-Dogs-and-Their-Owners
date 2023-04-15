import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementProductAmount,
  incrementProductAmount,
  removePosition
} from '../../features/ordering/ProductCartSlice';
import { IOrder, IOrderPosition } from '../../interfaces/Order';
import { AppDispatch } from '../../store/store';
import { Button } from '../../components/commons/Button/Button';
import { useBrandsQuery } from '../../features/ApiBrandsSlice';
import { IBrand } from '../../interfaces/Brand';

export const CartItem: React.FC<IOrderPosition> = ({ product, amount }) => {
  const { data: brandsData } = useBrandsQuery();
  const brands = brandsData?.['All brands'];
  const { id, images, title, brand, price, basePrice, discountAmount } = {
    ...product
  };
  const brandID = brand.id;

  const dispatch: AppDispatch = useDispatch();

  return (
    <section className="flex gap-[50px] items-center relative mb-[30px]">
      {images ? (
        <img src={images[0]} alt={'product' + id} className="w-[15%]" />
      ) : (
        <img
          src="./images/product-image.jpg"
          alt="no-product"
          className="w-[15%]"
        />
      )}
      <div className="text-left w-[30%]">
        <h3 className="text-[24px] mb-[20px]">{title}</h3>
        <p className="text-[20px]">
          {brands?.find((brand: IBrand) => brand.id === brandID)?.name}
        </p>
      </div>
      <div className="flex items-center w-[20%]">
        <Button
          text={'-'}
          value={'decrement'}
          styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-full 
          text-green text-base font-lemon w-[50px]"
          onClick={() => {
            dispatch(decrementProductAmount(id));
          }}
        />
        <span className="text-[32px] mx-[10px]">{amount}</span>
        <Button
          text={'+'}
          value={'increment'}
          styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-full 
          text-green text-base font-lemon w-[50px]"
          onClick={() => {
            dispatch(incrementProductAmount(id));
          }}
        />
      </div>
      <div className="w-[20%]">
        {discountAmount !== null ? (
          <p className="text-center mb-[15px]">
            <span className="text-[24px] text-dark_red mr-[10px]">
              {price - price * (discountAmount / 100)} zł
            </span>
            <span className="text-[20px] text-red/80 line-through">
              {price} zł
            </span>
          </p>
        ) : (
          <p className="text-dark_red text-center mb-[15px]">
            <span className="text-[24px]">{price} zł</span>
          </p>
        )}
        <p className="text-[14px] text-center">({basePrice} zł/kg)</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[50px] h-[50px] fill-dark_red hover:cursor-pointer hover:stroke-1 hover:stroke-white"
        onClick={() => {
          dispatch(removePosition(id));
        }}
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
          clipRule="evenodd"
        />
      </svg>
    </section>
  );
};
