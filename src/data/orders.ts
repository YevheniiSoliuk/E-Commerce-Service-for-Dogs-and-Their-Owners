import { data } from './products';
import { IOrder, IOrderPosition } from './../interfaces/Order';

type OrderPositions = {
  number: number,
  positions: IOrderPosition[]
}

export const positions: OrderPositions[] = [
  { 
    number: 1, 
    positions: 
      [{
        product: data[1],
        amount: Number("2")
      },
      {
        product: data[0],
        amount: Number("5")
      }]
  },
  { 
    number: 2, 
    positions: [
      {
        product: data[2],
        amount: Number("1")
      },
      {
        product: data[1],
        amount: Number("1")
      },
      {
        product: data[3],
        amount: Number("2")
      }
    ]
  },
  { 
    number: 3, 
    positions: [
      {
        product: data[2],
        amount: Number("4")
      }
    ]
  },
  { 
    number: 4, 
    positions: [
      {
        product: data[4],
        amount: Number("5")
      },
      {
        product: data[2],
        amount: Number("1")
      },
      {
        product: data[1],
        amount: Number("1")
      }
    ]
  }
]

export const orders = [
  {
    number: "17283473848",
    date: "05.05.2022", 
    status: "Odebrane",
    summaryPrice: "293.74",
    products: positions[0].positions
  },
  {
    number: "17283473848",
    date: "05.05.2022", 
    status: "W trakcie realizacji",
    summaryPrice: "293.74",
    products: positions[3].positions
  },
  {
    number: "17283473848",
    date: "05.05.2022", 
    status: "Oczekuje na potwierdzenie",
    summaryPrice: "293.74",
    products: positions[1].positions
  },
  {
    number: "17283473848",
    date: "05.05.2022", 
    status: "Odebrane",
    summaryPrice: "293.74",
    products: positions[2].positions
  },
  {
    number: "17283473848",
    date: "05.05.2022", 
    status: "Oczekuje na odbiór",
    summaryPrice: "293.74",
    products: positions[0].positions
  },
  {
    number: "17283473848",
    date: "05.05.2022", 
    status: "W drodzę",
    summaryPrice: "293.74",
    products: positions[3].positions
  }
]