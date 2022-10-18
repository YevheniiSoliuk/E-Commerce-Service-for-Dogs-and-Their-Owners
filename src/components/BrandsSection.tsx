import React from "react"
import animonda from "../assets/images/animonda.png";

type Brands = {
  brand: string,
  index: number,
}

const BrandsSection = () => {

  const brands: Brands[] = [{brand: animonda, index: 1}, {brand: animonda, index: 2}, {brand: animonda, index: 3}, {brand: animonda, index: 4}, {brand: animonda, index: 5}];

  return (
    <div className="w-full h-[200px] flex justify-between items-center bg-yellow px-[40px] py-[20px]">
      {brands.map(brand => <img src={brand.brand} alt={brand.brand} key={brand.index}/>)}
    </div>
  )
}

export default BrandsSection;