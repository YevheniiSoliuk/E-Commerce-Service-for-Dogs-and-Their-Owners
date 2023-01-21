import {apiSlice} from "../api/apiSlice";
import { IDeliveryMethod, IPostalPunct, IPostalPunktAddress, IPostalPunktWorkTime } from "../interfaces/DeliveryMethod";

const deliveryMethodsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    deliveries: builder.query<{[key: string]: IDeliveryMethod[]}, void>({
      query: () => "/delivery_methods"
    }),
    getPostalPunct: builder.query<{[key: string]: [{PostOffice: IPostalPunct, PostOfficeAddress: IPostalPunktAddress}]}, number | void>({
      query: (id: number) => `/post_office/${id}`
    }),
    getPostalPunctWorkTime: builder.query<{[key: string]: IPostalPunktWorkTime[]}, number | void>({
      query: (id: number) => `post_office_work_time/${id}`
    })
  })
})

export const {
  useDeliveriesQuery,
  useGetPostalPunctQuery,
  useGetPostalPunctWorkTimeQuery
} = deliveryMethodsApiSlice;