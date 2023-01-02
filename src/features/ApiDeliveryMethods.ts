import {apiSlice} from "../api/apiSlice";
import { IDeliveryMethod } from "../interfaces/DeliveryMethod";

const deliveryMethodsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    deliveries: builder.query<{[key: string]: IDeliveryMethod[]}, void>({
      query: () => "/deliveries"
    }),
  })
})

export const {
  useDeliveriesQuery,
} = deliveryMethodsApiSlice;