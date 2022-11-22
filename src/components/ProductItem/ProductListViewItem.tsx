import React from "react";
import Button from "../commons/Button/Button";
import StarRating from "../commons/StarRating";
import { ProductCardProps } from "./ProductCard";
import { Link } from "react-router-dom";

const ProductListViewItem = ({product, action}: ProductCardProps) => {

  const {id, title, brand, shortDescription, photos, price, discountPrice, basePrice, discountAmount, rating} = {...product};

  return (
    <div className="flex justify-start w-full h-[100%] bg-yellow border-2 border-green shadow-lg px-[10px] py-[10px] text-left rounded-[25px] mb-[20px] tracking-[.1em] relative">
      <div className="relative w-[35%] mr-[25px]">
        <Link to={`/product/${id}`}>
          <img src={photos[0]} alt="Product1" className="w-full"/>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-[40px] h-[40px] fill-green hover:fill-dark_red hover:stroke-green hover:cursor-pointer right-[10px] top-[10px]">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
        </svg>
      </div>
      {discountAmount !== null ? <>
        <span className="trapezoid relative"></span>
        <span className="absolute text-white text-[18px] -rotate-45 left-0 top-[10px]">{discountAmount}%</span>
      </>
      : null
      }
      
      <div className="flex flex-col justify-between items-justify w-[60%]">
        <div className="flex justify-between items-center my-[10px]">
          <h3 className="text-[20px]">{brand}</h3>
          <StarRating type="static" active={rating} size="h-[25px] w-[25px]" alignment="text-left" rates="15"/>
        </div>
        <p className="text-[18px]">{title}</p>
        <p className="grow text-[14px] text-center my-[20px] ">{shortDescription}</p>
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[24px] mb-[7px] text-dark_red">{price} zł</p>
          {discountAmount !== null ?
            <p className="text-[20px] mb-[7px] text-dark_red/50 line-through">{discountPrice} zł</p> : null
          }
          <p className="text-[12px]">({basePrice} zł/kg)</p>
          <Button text="Dodaj" value="add" styles="w-[150px] h-[45px] bg-orange border-2 border-green rounded-[20px] shadow-md px-[5px] py-[10px] text-center" onClick={action}/>
        </div>
      </div>
    </div>
  )
}

export default ProductListViewItem;