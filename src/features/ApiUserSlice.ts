import {apiSlice} from "../api/apiSlice";
import { IUser } from "../interfaces/User";

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    users: builder.query<IUser[], void>({
      query: () => "/users",
    }),
    deleteUser: builder.mutation<{}, number>({
      query: (id: number) => ({
        url: `/user/delete/${id}`,
        method: "DELETE"
      })
    })
  })
})

export const {
  useUsersQuery,
  useDeleteUserMutation
} = usersApiSlice;