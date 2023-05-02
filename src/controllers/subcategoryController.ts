import { getDoc, getDocs } from 'firebase/firestore';
import { ISubcategory } from '../interfaces/Category';
import { subcategoryCol } from '../utils/db';

export const getSubcategories = async () => {
  const subcategories: ISubcategory[] = [];

  try {
    const subcategoriesDocs = async () => {
      return await getDocs(subcategoryCol);
    };

    const subcategoriesSnapshot = await subcategoriesDocs();

    subcategoriesSnapshot.forEach((subcategoryDoc) => {
      const subcategory = subcategoryDoc.data();
      subcategory.id = subcategoryDoc.id;

      if (subcategory.categoryRef) {
        const getCategoryDocument = async () => {
          return await getDoc(subcategory.categoryRef);
        };

        getCategoryDocument().then((resolve) => {
          if (resolve.exists()) {
            subcategory.categoryID = resolve.id;
          }
        });
      }

      subcategories.push(subcategory);
    });
  } catch (e) {
    console.log(e);
  }

  return subcategories;
};
