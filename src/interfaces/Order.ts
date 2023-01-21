export interface IOrderPosition {
  product: IProduct,
  amount: number
}

export interface IAdvantage {
  name: string,
  image: string
}

export interface IOrder {
  city: string,
  street: string,
  home_number: string,
  post_code: string,
  status_id: number,
  payment_method_id: number,
  products_id: number[],
  amounts_of_products: number[]
}

export interface IProduct {
  id: string | number,
  title: string,
  brand_id: number,
  subcategory_id?: number | null,
  photos: string[],
  short_description?: string | null,
  long_description?: string | null,
  price: number,
  base_price: number,
  discount_amount?: number | null,
  rate: number,
  discount_price?: number | null,
  averages?: IAdvantage[] | null,
  ingredients?: string | null,
  dosage?: string | null
}