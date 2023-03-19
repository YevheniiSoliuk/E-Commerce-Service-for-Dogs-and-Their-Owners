import {apiSlice} from "../controllers/apiSlice";
import { IPaymentMethod } from "../interfaces/PaymentMethod";

const paymentMethodsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    payments: builder.query<{[key: string]: IPaymentMethod[]}, void>({
      query: () => "/payment_methods"
    }),
  })
})

export const {
  usePaymentsQuery,
} = paymentMethodsApiSlice;