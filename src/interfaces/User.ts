import { IOrder, IProduct } from './Order';
import { DocumentReference } from 'firebase/firestore';
import { IAnimal } from './Animal';

interface IUser {
  id?: string,
  uid?: string,
  name: string,
  lastname: string,
  email: string,
  phoneNumber: string,
  login: string,
  password: string,
  photoURL?: string | null,
  coins?: string | null,
  addressRef?: DocumentReference<IAddress> | null,
  address: IAddress,
  favouriteProductsRefs?: DocumentReference<IProduct>[] | null,
  favouriteProductsIDs?: string[] | null,
  animalsRefs?: DocumentReference<IAnimal>[] | null,
  animals?: IAnimal[],
  ordersRefs?: DocumentReference<IOrder>[] | null,
  ordersIDs?: string[] | null
}

interface IAddress {
  street: string,
  postalCode: string,
  state: string,
  city: string,
  homeNumber: string,
}

interface ILoginCredentials {
  email: string,
  password: string
}

interface IUserUpdate {
  name: string,
  surname: string,
  phone_number: string,
  state: string,
  city: string,
  home_number: string,
  post_code: string,
  street: string
}

interface IUserUpdatePass {
  old_password: string,
  new_password: string
}

export type {
  IUser,
  IAddress,
  ILoginCredentials,
  IUserUpdate,
  IUserUpdatePass
}