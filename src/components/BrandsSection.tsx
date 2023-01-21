import React, { useEffect, useState } from "react"
import animonda from "../assets/images/animonda.png";
import { useBrandsQuery } from "../features/ApiBrandsSlice";
import { IBrand } from "../interfaces/Brand";

type Brands = {
  brand: string,
  index: number,
}

const BrandsSection = () => {

  const [brands, setBrands] = useState<IBrand[]>([]);
  //const brands: Brands[] = [{brand: animonda, index: 1}, {brand: animonda, index: 2}, {brand: animonda, index: 3}, {brand: animonda, index: 4}, {brand: animonda, index: 5}];
  const {data} = useBrandsQuery();
  
  useEffect(()=>{
    if(data)
    {
      setBrands(data["All brands"]);
    }
    
  }, [data])

  return (
    <div className="w-full h-[200px] flex gap-[30px] items-center bg-yellow px-[40px] py-[20px]">
      {[1,2,3].map(_ =>brands.map((brand: IBrand) => <img src={brand.photo} alt={brand.name} key={brand.id} className="w-[10%] animate-scrollx"/>))}
    </div>
  )
}

export default BrandsSection;