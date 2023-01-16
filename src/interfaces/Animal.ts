interface IAnimal {
  name: string,
  birth_date: string,
  weight: number,
  photo_url: string,
  breed_id: number,
  id: number,
  sex: string,
  height: number,
  bio: string,
  user_id: number
}

interface IBreed {
  id: number,
  name: string
}

interface IAnimalImage {
  id: number,
  image: FormData
}

interface IAnimalUpdate {
  id: number,
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