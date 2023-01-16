export interface IUser {
  id: number,
  name: string,
  lastname: string,
  email: string,
  phone: string,
  login: string,
  password: string,
  photo: string,
  coins: string,
  address_id: number,
  is_admin: boolean,
  favourites: number[]
}