import { getDocs } from "firebase/firestore";
import { ICategory } from "../interfaces/Category";
import { categoryCol } from "../utils/db";


export const getCategories = () => {
  let categories: ICategory[] = [];

  const categoriesDocs = async () => { 
    return await getDocs(categoryCol) 
  };

  categoriesDocs().then((resolve) => {
    resolve.forEach(categoryDoc => {
      const category = categoryDoc.data();
      category.id = categoryDoc.id;
  
      categories.push(category);
    })
  })

  return categories;
}