import { ISubcategory } from './Category';
import { DocumentReference } from 'firebase/firestore';
import { IBrand } from './Brand';
import { IPaymentMethod } from './PaymentMethod';
import { IDeliveryMethod } from './DeliveryMethod';

export interface IOrderPosition {
  product: IProduct;
  amount: number;
}

export interface IAdvantage {
  name: string;
  image: string;
}

export interface IStatus {
  name: string;
}

export interface IOrder {
  orderCode: string;
  city: string;
  state: string;
  street: string;
  homeNumber: string;
  postalCode: string;
  statusRef: DocumentReference<IStatus> | null;
  status: IStatus;
  paymentMethodRef: DocumentReference<IPaymentMethod> | null;
  paymentMethod: IPaymentMethod;
  deliveryMethodRef: DocumentReference<IDeliveryMethod> | null;
  deliveryMethod: IDeliveryMethod | null;
  products: IOrderPosition[];
}

export interface IProduct {
  id: string;
  title: string;
  brandRef: DocumentReference<IBrand>;
  brand: IBrand;
  subcategoryRef: DocumentReference<ISubcategory>;
  subcategoryID: string;
  images: string[];
  shortDescription: string | null;
  longDescription: string | null;
  price: number;
  basePrice: number;
  discountAmount: number | null;
  rate: number;
  ingredients: string | null;
  dosage: string | null;
}
