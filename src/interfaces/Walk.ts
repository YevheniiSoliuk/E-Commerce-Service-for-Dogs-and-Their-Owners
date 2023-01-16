interface IWalk {
  time: string,
  id: number,
  photo: Array<number>,
  user_id: number,
  coins_gained: number,
  distance: number,
  animals_id: number[]
}

export type {
  IWalk
}