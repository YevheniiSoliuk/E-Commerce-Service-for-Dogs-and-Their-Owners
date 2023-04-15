import { DocumentReference, getDoc, getDocs } from 'firebase/firestore';
import { IBreed } from '../interfaces/Animal';
import { breedCol } from '../utils/db';

type getAnimalBreedFn = (
  animalBreedRef: DocumentReference<IBreed>
) => Promise<IBreed>;

export const getAnimalBreed: getAnimalBreedFn = async (animalBreedRef) => {
  let breed = {} as IBreed;

  const snapshot = await getDoc(animalBreedRef);

  if (snapshot.exists()) {
    breed.id = snapshot.id;
    breed = snapshot.data();
  }

  return breed;
};

export const getBreeds = () => {
  const breeds: IBreed[] = [];

  getDocs(breedCol).then((resolve) => {
    resolve.forEach((breedDoc) => {
      const breed = breedDoc.data();
      breed.id = breedDoc.id;
      breeds.push(breed);
    });
  });

  return breeds;
};
