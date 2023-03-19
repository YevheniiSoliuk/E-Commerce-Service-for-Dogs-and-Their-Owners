import { getDoc, getDocs } from "firebase/firestore";
import { ISubcategory } from "../interfaces/Category";
import { subcategoryCol } from "../utils/db";

export const getSubcategories = () => {
  let subcategories: ISubcategory[] = [];

  const subcategoriesDocs = async () => {
    return await getDocs(subcategoryCol);
  }

  subcategoriesDocs().then(resolve => {
    resolve.forEach((subcategoryDoc) => {
      let subcategory = subcategoryDoc.data();
      subcategory.id = subcategoryDoc.id;
  
      if(subcategory.categoryRef)
      {
        const getCategoryDocument = async () => {
          return await getDoc(subcategory.categoryRef);
        }
  
        getCategoryDocument().then(resolve => {
          if(resolve.exists())
          {
            subcategory.categoryID = resolve.id;
          }
        })
      }
  
      subcategories.push(subcategory);
    })
  })

  return subcategories;
}