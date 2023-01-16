import {apiSlice} from "../api/apiSlice";
import { IAnimal, IAnimalImage, IAnimalUpdate, IBreed } from "../interfaces/Animal";

const animalsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    animals: builder.query<{[key: string]: IAnimal[]}, number | void>({
      query: (id: number) => `/users/${id}/animals`
    }),
    updateAnimal: builder.mutation<{}, IAnimalUpdate>({
      query: ({id, ...data}) => ({
        url: `/animal/${id}`,
        method: 'PATCH',
        body: data
      })
    }),
    breeds: builder.query<{[key: string]: IBreed[]}, void>({
      query: () => "/breeds"
    }),
    setImage: builder.mutation<{}, IAnimalImage>({
      query: ({id, image}) => ({
        url: `/animal/${id}/animal-image-change`,
        method: 'PATCH',
        body: image
      })
    }),
  })
})

export const {
  useAnimalsQuery,
  useBreedsQuery,
  useSetImageMutation,
  useUpdateAnimalMutation
} = animalsApiSlice;