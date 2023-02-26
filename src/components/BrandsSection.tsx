import { useEffect, useState } from "react"
import { useBrandsQuery } from "../features/ApiBrandsSlice";
import { IBrand } from "../interfaces/Brand";

export const BrandsSection = () => {
  const [brands, setBrands] = useState<IBrand[]>([]);
  const {data} = useBrandsQuery();
  
  useEffect(() => {
    if(data) {
      setBrands(data["All brands"]);
    }
  }, [data])

  return (
    <section className="w-full h-[200px] flex gap-[30px] items-center bg-yellow px-[40px] py-[20px]">
      {[1,2,3].map(_ =>brands.map((brand: IBrand) => 
        <img 
          key={brand.id}
          src={brand.photo} 
          alt={brand.name} 
          className="w-[10%] animate-scrollx"
        />))
      }
    </section>
  )
}