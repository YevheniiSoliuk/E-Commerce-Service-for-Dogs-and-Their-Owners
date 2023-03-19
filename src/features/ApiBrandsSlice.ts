import {apiSlice} from "../controllers/apiSlice";
import { IBrand } from "../interfaces/Brand";

const brandsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    brands: builder.query<{[key: string]: IBrand[]}, void>({
      query: () => "/brands"
    }),
  })
})

export const {
  useBrandsQuery,
} = brandsApiSlice;