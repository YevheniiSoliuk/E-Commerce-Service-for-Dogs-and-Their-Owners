import React from 'react';
import { Button } from '../commons/Button/Button';
import { StarRating } from '../commons/StarRating';
import { IProduct } from '../../interfaces/Order';
import { Link } from 'react-router-dom';

export type ProductCardProps = {
  product: IProduct;
  addToCart: () => void;
  isFavourite: (id: string) => boolean;
  handleFavouriteClick: () => Promise<void>;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
  isFavourite,
  handleFavouriteClick
}) => {
  const {
    id,
    title,
    brand,
    images,
    price,
    basePrice,
    discountAmount,
    rate,
    ratesAmount
  } = {
    ...product
  };

  return (
    <section className="flex flex-col justify-start w-[230px] h-[100%] bg-yellow border-2 border-green shadow-lg px-[10px] py-[10px] text-left rounded-[25px] mb-[20px] tracking-[.1em] relative">
      <div className="w-full h-[250px] mb-[20px]">
        <Link to={`/product/${id}`}>
          <img
            src={images ? images[0] : './images/product-image.jpg'}
            alt="product"
            className="w-[100%] h-[100%]"
          />
        </Link>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`absolute w-[30px] h-[30px] ${isFavourite(id)
            ? 'fill-dark_red hover:fill-green'
            : 'fill-green hover:fill-dark_red'
          } stroke-green  hover:cursor-pointer right-[10px] top-[10px]`}
        onClick={() => {
          handleFavouriteClick();
        }}
      >
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
      {discountAmount !== null ? (
        <>
          <span className="trapezoid"></span>
          <span className="absolute text-white text-[16px] font-bold -rotate-45 left-[3%] top-[2%]">
            {discountAmount}%
          </span>
        </>
      ) : null}
      <h3 className="text-[16px] mb-[10px]">{brand.name}</h3>
      <p className="text-[12px] truncate mb-[6px]">{title}</p>
      <StarRating
        type="static"
        active={rate}
        size="h-[15px] w-[15px]"
        alignment="text-left"
        rates={ratesAmount}
      />
      <section className="flex justify-between items-end mt-[10px]">
        <div className="text-left">
          {discountAmount !== null ? (
            <p className="text-[20px] mb-[7px] text-dark_red">
              {(price - price * (discountAmount / 100)).toFixed(2)} zł
            </p>
          ) : (
            <p className="text-[20px] mb-[7px] text-dark_red">{price} zł</p>
          )}
          <p className="text-[12px]">({basePrice} zł/kg)</p>
        </div>
        <Button
          text="Dodaj"
          value="add"
          styles="w-[75px] h-[45px] bg-orange border-2 border-green rounded-br-[20px] shadow-md 
          px-[5px] py-[10px] text-center hover:border-0 active:border-2"
          onClick={addToCart}
        />
      </section>
    </section>
  );
};
