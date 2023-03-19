import {apiSlice} from "../controllers/apiSlice";
import { IOrder } from "../interfaces/Order";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    order: builder.mutation<{}, IOrder>({
      query: (payload: IOrder) => ({
        url: "/order/create",
        method: "POST", 
        body: payload
      })
    }),
  })
})

export const {
  useOrderMutation,
} = orderApiSlice;