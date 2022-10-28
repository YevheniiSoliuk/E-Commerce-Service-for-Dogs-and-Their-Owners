import React from "react";
import Button from "../commons/Button/Button";
import productImage from "../../assets/images/product-image.jpg";
import StarRating from "../commons/StarRating";

const ProductCard = () => {
  return (
    <div className="flex flex-col justify-start w-[230px] h-[100%] bg-yellow border-2 border-green shadow-lg px-[10px] py-[10px] text-left rounded-[25px] mb-[20px] tracking-[.1em] relative">
      <img src={productImage} alt="Product1" className="w-[100%] mb-[20px]"/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-[25px] h-[25px] fill-green hover:fill-dark_red hover:stroke-green hover:cursor-pointer right-[10px] top-[10px]">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
      </svg>
      <span className="trapezoid"></span>
      <span className="absolute text-white text-[18px] -rotate-45 left-[-7px] top-[13px]">-20%</span>
      <h3 className="text-[16px] mb-[10px]">ROYAL CANIN</h3>
      <p className="text-[12px] mb-[6px]">Shepherd Adult 11kg karma sucha dla psów dorosłych rasy owczarek niemiecki</p>
      <StarRating type="static" active={4} size="h-[15px] w-[15px]" alignment="text-left" rates="15"/>
      <div className="flex justify-between items-end mt-[10px]">
        <div className="text-left">
          <p className="text-[20px] mb-[7px] text-dark_red">217,75 zł</p>
          <p className="text-[12px]">(19,80 zł/kg)</p>
        </div>
        <Button text="Dodaj" value="add" styles="w-[75px] h-[45px] bg-orange border-2 border-green rounded-br-[20px] shadow-md px-[5px] py-[10px] text-center" onClick={()=>{}}/>
      </div>
    </div>
  )
}

export default ProductCard;