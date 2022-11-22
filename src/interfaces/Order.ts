export interface IOrderPosition {
  product: IProduct,
  amount: number
}

export interface IAdvantage {
  name: string,
  image: string
}

export interface IOrder {
  number: string,
  date: string, 
  status: string,
  summaryPrice: string,
  products: IOrderPosition[],
}

export interface IProduct {
  id: string | number,
  title: string,
  brand: string,
  category?: string | null,
  photos: string[],
  shortDescription?: string | null,
  longDescription?: string | null,
  price: number,
  basePrice: number,
  discountAmount?: number | null,
  rating: number,
  discountPrice?: number | null,
  averages?: IAdvantage[] | null,
  ingredients?: string | null,
  dosage?: string | null,
  favorite?: boolean | null,
}