import { getDocs } from 'firebase/firestore';
import { IBrand } from '../interfaces/Brand';
import { brandCol } from '../utils/db';

export const getBrands = () => {
  const brands: IBrand[] = [];

  const brandsDocs = async () => {
    return await getDocs(brandCol);
  };

  brandsDocs().then((resolve) => {
    resolve.forEach((brandDoc) => {
      const brand = brandDoc.data();
      brand.id = brandDoc.id;

      brands.push(brand);
    });
  });

  return brands;
};
