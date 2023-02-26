import {apiSlice} from "../api/apiSlice";
import { IProduct } from "../interfaces/Order";

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    products: builder.query<{[key: string]: IProduct[]}, void>({
      query: () => "/products",
    }),
    product: builder.query<{[key: string]: IProduct}, number | void>({
      query: (id: number) => `/product/${id}`
    }),
    addProductToFavorites: builder.mutation<{[key: string]: {
      [key: string]: number[]
    }}, number>({
      query: (id) => ({
        url: `/product/${id}/add-to-favourites`,
        method: 'PATCH'
      })
    }),
    deleteProductFromFavorites: builder.mutation<{[key: string]: {
      [key: string]: number[]
    }}, number>({
      query: (id) => ({
        url: `/product/${id}/delete-from-favourites`,
        method: 'PATCH'
      })
    }),
  })
})

export const {
  useProductsQuery,
  useProductQuery,
  useAddProductToFavoritesMutation,
  useDeleteProductFromFavoritesMutation,
} = productsApiSlice;