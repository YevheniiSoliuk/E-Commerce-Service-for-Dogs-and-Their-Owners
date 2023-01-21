interface IUser {
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

interface IAddress {
  street: string,
  id: number,
  post_code: string,
  state: string,
  city: string,
  home_number: string,
  user_id: number,
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
  IUserUpdate,
  IUserUpdatePass
}