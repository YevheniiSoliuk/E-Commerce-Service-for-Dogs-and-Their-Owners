import { getDocs } from 'firebase/firestore';
import { IBrand } from '../interfaces/Brand';
import { brandCol } from '../utils/db';

export const getBrands = async () => {
  const brands: IBrand[] = [];

  try {
    const brandsDocs = async () => {
      return await getDocs(brandCol);
    };

    const brandsSnapshot = await brandsDocs();

    brandsSnapshot.forEach((brandDoc) => {
      const brand = brandDoc.data();
      brand.id = brandDoc.id;

      brands.push(brand);
    });
  } catch (e) {
    console.log(e);
  }

  return brands;
};
