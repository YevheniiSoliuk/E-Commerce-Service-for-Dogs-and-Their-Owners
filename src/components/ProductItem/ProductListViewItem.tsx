import React from 'react';
import { Button } from '../commons/Button/Button';
import { StarRating } from '../commons/StarRating';
import { ProductCardProps } from './ProductCard';
import { Link } from 'react-router-dom';

export const ProductListViewItem: React.FC<ProductCardProps> = ({
  product,
  addToCart,
  isFavourite,
  handleFavouriteClick
}) => {

  const {
    id,
    title,
    brand,
    shortDescription,
    images,
    price,
    basePrice,
    discountAmount,
    rate,
    ratesAmount
  } = { ...product };

  return (
    <section
      className="flex justify-between w-full h-[100%] bg-yellow border-2 border-green shadow-lg px-[10px] 
      py-[10px] text-left rounded-[25px] mb-[20px] tracking-[.1em] relative"
    >
      <section className="relative h-[100%] w-[20%] mr-[25px]">
        <div className="w-full h-[100%] mb-[20px]">
          <Link to={`/product/${id}`}>
            <img
              src={images ? images[0] : './images/product-image.jpg'}
              alt="Product1"
              className="w-full"
            />
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`absolute w-[40px] h-[40px] ${isFavourite(id)
            ? 'fill-dark_red hover:fill-green'
            : 'fill-green hover:fill-dark_red'
            } stroke-green hover:cursor-pointer right-[10px] top-[10px]`}
          onClick={() => {
            handleFavouriteClick();
          }}
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </section>
      {discountAmount !== null ? (
        <>
          <span className="trapezoid"></span>
          <span className="absolute text-white text-[16px] font-bold -rotate-45 left-[0.5em] top-[0.75em]">
            {discountAmount}%
          </span>
        </>
      ) : null}
      <section className="flex flex-col justify-between items-justify w-[75%]">
        <div className="flex justify-between items-center my-[10px]">
          <h3 className="text-[20px]">{brand.name}</h3>
          <StarRating
            type="static"
            active={rate}
            size="h-[25px] w-[25px]"
            alignment="text-left"
            rates={ratesAmount}
          />
        </div>
        <p className="text-[18px]">{title}</p>
        <p className="flex items-center grow text-[14px] text-center my-[20px] ">
          {shortDescription}
        </p>
        <div className="w-full flex justify-between items-center mb-[10px]">
          <div className="w-[50%] flex justify-between items-center">
            <p className="text-[24px] text-dark_red">
              {discountAmount !== null
                ? (price - price * (discountAmount / 100)).toFixed(2)
                : price}{' '}
              zł
            </p>
            {discountAmount !== null ? (
              <p className="text-[20px] text-dark_red/50 line-through">
                {price} zł
              </p>
            ) : null}
            <p className="text-[12px]">({basePrice} zł/kg)</p>
          </div>
          <Button
            text="Dodaj"
            value="add"
            styles="w-[150px] h-[45px] bg-orange border-2 border-green rounded-[20px] shadow-md 
            px-[5px] py-[10px] text-center hover:border-0 active:border-2"
            onClick={addToCart}
          />
        </div>
      </section>
    </section>
  );
};
