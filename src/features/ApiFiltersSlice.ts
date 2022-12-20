import {apiSlice} from "../api/apiSlice";
import { ICategory, ISubcategory } from "../interfaces/Category";

const filtersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    categories: builder.query<{[key: string]: ICategory[]}, void>({
      query: () => "/categories"
    }),
    subcategories: builder.query<{[key: string]: ISubcategory[]}, void>({
      query: () => "/subcategories"
    })
  })
})

export const {
  useCategoriesQuery,
  useSubcategoriesQuery
} = filtersApiSlice;