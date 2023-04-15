import {
  CollectionReference,
  DocumentData,
  collection
} from 'firebase/firestore';
import { firestore } from './../firebase.config';

import { ICategory, ISubcategory } from '../interfaces/Category';
import { IAnimal, IBreed } from '../interfaces/Animal';
import { IBrand } from '../interfaces/Brand';
import { IDeliveryMethod, IPostalPunct } from '../interfaces/DeliveryMethod';
import { IPaymentMethod } from '../interfaces/PaymentMethod';
import { IOrder, IProduct, IStatus } from './../interfaces/Order';
import { IAddress, IUser } from '../interfaces/User';
import { IWalk } from '../interfaces/Walk';

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export const categoryCol = createCollection<ICategory>('category');
export const subcategoryCol = createCollection<ISubcategory>('subcategory');
export const brandCol = createCollection<IBrand>('brand');
export const productCol = createCollection<IProduct>('product');
export const animalCol = createCollection<IAnimal>('animal');
export const breedCol = createCollection<IBreed>('breed');
export const deliveryMethodCol =
  createCollection<IDeliveryMethod>('deliveryMethod');
export const postalPunctCol = createCollection<IPostalPunct>('postalPunct');
export const orderCol = createCollection<IOrder>('order');
export const statusCol = createCollection<IStatus>('status');
export const paymentMethodCol =
  createCollection<IPaymentMethod>('paymentMethod');
export const userCol = createCollection<IUser>('user');
//export const addressCol = createCollection<IAddress>("address");
//export const walkCol = createCollection<IWalk>("walk");
