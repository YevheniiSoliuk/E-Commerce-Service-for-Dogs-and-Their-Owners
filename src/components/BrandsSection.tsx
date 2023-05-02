import { useEffect, useState } from 'react';
import { useBrandsQuery } from '../features/ApiBrandsSlice';
import { IBrand } from '../interfaces/Brand';
import { getBrands } from '../controllers/brandController';

export const BrandsSection = () => {
  const [brands, setBrands] = useState<IBrand[]>([]);
  //const { data } = useBrandsQuery();

  useEffect(() => {
    // if (data) {
    //   setBrands(data['All brands']);
    // }
    const fetchBrands = async () => {
      setBrands(await getBrands());
    };

    fetchBrands();
  }, []);

  return (
    <section className="relative w-screen h-[200px] bg-yellow px-[40px] py-[20px] overflow-x-hidden">
      <section className="absolute w-full h-[100%] left-0 top-0 animate-scrollx_primary flex gap-[30px] items-center">
        {brands.map((brand: IBrand) => (
          <img
            key={brand.id}
            src={brand.logoURL}
            alt={brand.name}
            className="w-[100px]"
          />
        ))}
      </section>
      <section className="absolute w-full h-[100%] left-[200%] top-0 animate-scrollx_secondary flex gap-[30px] items-center ml-30px">
        {brands.map((brand: IBrand) => (
          <img
            key={brand.id}
            src={brand.logoURL}
            alt={brand.name}
            className="w-[100px]"
          />
        ))}
      </section>
    </section>
  );
};
