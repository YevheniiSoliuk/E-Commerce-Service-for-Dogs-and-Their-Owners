import {apiSlice} from "../api/apiSlice";
import { IProduct } from "../interfaces/Order";

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    products: builder.query<{[key: string]: IProduct[]}, void>({
      query: () => "/products"
    }),
    product: builder.query<{[key: string]: IProduct}, number | void>({
      query: (id: number) => `/product/${id}`
    }),
    toggleLikeProduct: builder.mutation<IProduct, Partial<IProduct> & Pick<IProduct, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `/product/update/${id}`,
        method: 'PATCH',
        body: patch
      })
    })
  })
})

export const {
  useProductsQuery,
  useProductQuery,
  useToggleLikeProductMutation
} = productsApiSlice;