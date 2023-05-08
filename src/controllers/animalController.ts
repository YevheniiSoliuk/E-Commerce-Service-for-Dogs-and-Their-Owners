import { getAnimalBreed } from './breedController';
import {
  DocumentReference,
  DocumentSnapshot,
  getDoc
} from 'firebase/firestore';
import { IAnimal } from '../interfaces/Animal';
import { IWalk } from '../interfaces/Walk';

type getUserAnimalFn = (
  animalRef: DocumentReference<IAnimal>
) => Promise<IAnimal>;

export const getUserAnimal: getUserAnimalFn = async (animalRef) => {
  const snapshot = await getDoc(animalRef);

  if (!snapshot.exists()) {
    return {} as IAnimal;
  }

  const animal = snapshot.data();
  animal.id = snapshot.id;

  if (animal.breedRef) {
    animal.breed = await getAnimalBreed(animal.breedRef);
  }

  if (animal.walksRefs) {
    animal.walks = [];
    const promises: Promise<DocumentSnapshot<IWalk>>[] = [];

    animal.walksRefs.forEach((walkRef) => {
      promises.push(getDoc(walkRef));
    });

    Promise.all(promises).then((walks) => {
      walks.forEach((walk) => {
        if (walk.exists()) {
          animal.walks.push(walk.data());
        }
      });
    });
  }

  return Object.assign({}, animal);
};
