import { getDocs } from "firebase/firestore";
import { IPostalPunct } from "../interfaces/DeliveryMethod";
import { postalPunctCol } from "../utils/db";

export const getPostalPuncts = () => {
  let postalPuncts: IPostalPunct[] = [];

  const postalPunctsDocs = async () => {
    return await getDocs(postalPunctCol);
  }

  postalPunctsDocs().then(resolve => {
    resolve.forEach(postalPunctDoc => {
      let postalPunct = postalPunctDoc.data();
      postalPunct.id = postalPunctDoc.id;
      postalPuncts.push(postalPunct);
    })
  })

  return postalPuncts;
}