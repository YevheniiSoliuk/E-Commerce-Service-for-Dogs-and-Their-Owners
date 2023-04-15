import { getAnimalBreed } from './breedController';
import { DocumentReference, getDoc } from 'firebase/firestore';
import { IAnimal } from '../interfaces/Animal';

type getUserAnimalFn = (
  animalRef: DocumentReference<IAnimal>
) => Promise<IAnimal>;

export const getUserAnimal: getUserAnimalFn = async (animalRef) => {
  let userAnimal = {} as IAnimal;

  const snapshot = await getDoc(animalRef);

  if (snapshot.exists()) {
    const animal = snapshot.data();
    animal.id = snapshot.id;

    if (animal.breedRef) {
      animal.breed = await getAnimalBreed(animal.breedRef);
    }

    if (animal.walksRefs) {
      animal.walks = [];

      animal.walksRefs.forEach(async (walkRef) => {
        const walkSnapshot = await getDoc(walkRef);

        if (walkSnapshot.exists()) {
          animal.walks = [...animal.walks, walkSnapshot.data()];
        }
      });
    }

    userAnimal = Object.assign({}, animal);
  }

  return userAnimal;
};
