interface IPostalPunktAddress {
  city: string,
  street: string,
  build_number: string,
  langitude: string,
  longtitude: string
}

interface IWorkTime {
  open?: string,
  close?: string,
  alltime?: boolean
}

interface IPostalPunktWorkTime {
  monday: IWorkTime,
  tuesday: IWorkTime,
  wednesday: IWorkTime,
  thursday: IWorkTime,
  friday: IWorkTime,
  saturday: IWorkTime,
  sunday: IWorkTime
}

interface IPostalPunct {
  name: string,
  address: IPostalPunktAddress,
  work_time: IPostalPunktWorkTime,
}

interface IDeliveryMethod {
  name: string,
  logo: string,
  delivery_payment: number,
  delivery_time: string,
  postal_punkts: IPostalPunct[]
}


export type {
  IPostalPunct,
  IDeliveryMethod
}