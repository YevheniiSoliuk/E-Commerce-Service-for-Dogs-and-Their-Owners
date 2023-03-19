import { DocumentReference } from 'firebase/firestore';

interface ICoordinates {
  latitude: number,
  longitude: number
}

interface IPostalPunktAddress {
  id: string,
  city: string,
  street: string,
  postalCode: string,
  coordinates: ICoordinates
}

interface IPostalPunktWorkTime {
  id: string,
  day: string,
  time: string
}

interface IPostalPunct {
  id: string,
  name: string,
  type: string,
  postalPunctAddress: IPostalPunktAddress,
  postalPunctWorkTime: IPostalPunktWorkTime[]
}

interface IDeliveryMethod {
  id: string,
  name: string,
  logoURL: string,
  deliveryPayment: number,
  deliveryTime: number,
  postalPunctsRefs: DocumentReference<IPostalPunct>[]
  postalPuncts: IPostalPunct[]
}


export type {
  IPostalPunct,
  IDeliveryMethod,
  IPostalPunktAddress,
  IPostalPunktWorkTime
}