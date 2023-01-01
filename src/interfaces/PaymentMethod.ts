interface IPaymentMethod {
  name: string,
  logo: string
  cards?: IPaymentMethod[]
}

export type {
  IPaymentMethod
}