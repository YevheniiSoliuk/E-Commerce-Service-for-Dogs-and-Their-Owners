import {apiSlice} from "../controllers/apiSlice";
import { IWalk } from "../interfaces/Walk";

const walksApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    walks: builder.query<{[key: string]: IWalk[]}, void>({
      query: () => "/walks"
    }),
  })
})

export const {
  useWalksQuery,
} = walksApiSlice;