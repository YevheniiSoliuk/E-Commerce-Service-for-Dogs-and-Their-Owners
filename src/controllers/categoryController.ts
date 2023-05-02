import { getDocs } from 'firebase/firestore';
import { ICategory } from '../interfaces/Category';
import { categoryCol } from '../utils/db';

export const getCategories = async () => {
  const categories: ICategory[] = [];

  try {
    const categoriesDocs = async () => {
      return await getDocs(categoryCol);
    };

    const categoriesSnapshot = await categoriesDocs();

    categoriesSnapshot.forEach((categoryDoc) => {
      const category = categoryDoc.data();
      category.id = categoryDoc.id;

      categories.push(category);
    });
  } catch (e) {
    console.log(e);
  }

  return categories;
};
