import { getDocs } from "firebase/firestore";
import { IBreed } from "../interfaces/Animal";
import { breedCol } from "../utils/db";

export const getBreeds = () => {
  let breeds: IBreed[] = [];

  const breedDocs = async () => {
    return await getDocs(breedCol);
  }

  breedDocs().then(resolve => {
    resolve.forEach(breedDoc => {
      let breed = breedDoc.data();
      breed.id = breedDoc.id;
      breeds.push(breed);
    })
  })

  return breeds;
}