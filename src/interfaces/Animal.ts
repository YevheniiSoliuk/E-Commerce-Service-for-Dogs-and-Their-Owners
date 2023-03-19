import { DocumentReference } from 'firebase/firestore';
import { IWalk } from './Walk';

interface IAnimal {
  id: string,
  name: string,
  birthDate: string,
  sex: string,
  height: number,
  weight: number,
  bio: string,
  photoURL: string,
  breedRef: DocumentReference<IBreed>,
  breedID: string,
  walksRefs: DocumentReference<IWalk>[],
  walks: IWalk[]
}

interface IBreed {
  id: string,
  name: string
}

interface IAnimalImage {
  id: string,
  image: FormData
}

interface IAnimalUpdate {
  id: string,
  name: string,
  weight: number,
  height: number,
  bio: string
}

export type {
  IAnimal,
  IBreed,
  IAnimalImage,
  IAnimalUpdate
}