import { getAnimalBreed } from './breedController';
import { DocumentReference, getDoc } from "firebase/firestore";
import { IAnimal } from "../interfaces/Animal";

type getUserAnimalFn = (animalRef: DocumentReference<IAnimal>) => IAnimal;

export const getUserAnimal: getUserAnimalFn = (animalRef) => {
  let userAnimal = {} as IAnimal;

  getDoc(animalRef).then(resolve => {
    if(resolve.exists()) {
      let animal = resolve.data();
      animal.id = resolve.id;

      if(animal.breedRef) {
        animal.breed = getAnimalBreed(animal.breedRef);
      }

      if(animal.walksRefs) {
        animal.walks = [];

        animal.walksRefs.forEach(walkRef => {
          getDoc(walkRef).then(resolve => {
            if(resolve.exists()) {
              animal.walks.push(resolve.data());
            }
          })
        })
      }
       
      userAnimal = animal;
    }
  })

  return userAnimal;
}