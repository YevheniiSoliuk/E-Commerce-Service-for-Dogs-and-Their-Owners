import {apiSlice} from "../api/apiSlice";
import { IPaymentMethod } from "../interfaces/PaymentMethod";

const filtersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    payments: builder.query<{[key: string]: IPaymentMethod[]}, void>({
      query: () => "/payments"
    }),
  })
})

export const {
  usePaymentsQuery,
} = filtersApiSlice;