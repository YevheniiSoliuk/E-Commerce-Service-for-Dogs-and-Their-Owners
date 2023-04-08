import { DocumentReference, getDoc, getDocs } from "firebase/firestore";
import { IBreed } from "../interfaces/Animal";
import { breedCol } from "../utils/db";

type getAnimalBreedFn = (animalBreedRef: DocumentReference<IBreed>) => IBreed;

export const getAnimalBreed: getAnimalBreedFn = (animalBreedRef) => {
  let breed = {} as IBreed;

  getDoc(animalBreedRef).then(resolve => {
    if(resolve.exists()) {
      breed.id = resolve.id;
      breed = resolve.data();
    }
  })

  return breed;
}

export const getBreeds = () => {
  let breeds: IBreed[] = [];

  getDocs(breedCol).then(resolve => {
    resolve.forEach(breedDoc => {
      let breed = breedDoc.data();
      breed.id = breedDoc.id;
      breeds.push(breed);
    })
  })

  return breeds;
}