interface IPostalPunktAddress {
  id: number,
  city: string,
  street: string,
  build_number: string,
  latitude: string,
  longtitude: string
}

interface IPostalPunktWorkTime {
  id: number,
  post_office_id: number,
  name: string,
  work_time: string
}

interface IPostalPunct {
  id: number,
  name: string,
  post_office_address_id: number,
}

interface IDeliveryMethod {
  name: string,
  logo: string,
  delivery_payment: number,
  delivery_time: string,
  postal_points: number[]
}


export type {
  IPostalPunct,
  IDeliveryMethod,
  IPostalPunktAddress,
  IPostalPunktWorkTime
}