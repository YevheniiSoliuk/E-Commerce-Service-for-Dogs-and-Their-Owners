import { getDoc, getDocs } from "firebase/firestore";
import { IAnimal } from "../interfaces/Animal";
import { animalCol } from "../utils/db";

export const getAnimals = () => {
  let animals: IAnimal[] = [];

  const animalDocs = async () => {
    return await getDocs(animalCol);
  }

  animalDocs().then(resolve => {
    resolve.forEach(animalDoc => {
      let animal = animalDoc.data();
      animal.id = animalDoc.id;

      if(animal.breedRef)
      {
        const breedDoc = async () => {
          return await getDoc(animal.breedRef);
        }

        breedDoc().then(resolve => {
          if(resolve.exists())
          {
            animal.breedID = resolve.id;
          }
        })
      }

      if(animal.walksRefs)
      {
        animal.walks = [];

        animal.walksRefs.forEach(walkRef => {
          const walkDoc = async () => {
            return await getDoc(walkRef);
          }

          walkDoc().then(resolve => {
            if(resolve.exists())
            {
              animal.walks.push(resolve.data());
            }
          })
        })
      }

      animals.push(animal);
    })
  })

  return animals;
}