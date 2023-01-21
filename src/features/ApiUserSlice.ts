import {apiSlice} from "../api/apiSlice";
import { IAddress, IUser, IUserUpdate, IUserUpdatePass } from "../interfaces/User";

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    users: builder.query<IUser[], void>({
      query: () => "/users",
    }),
    getUserAddress: builder.query<IAddress, number | void>({
      query: (id: number) => `/user/${id}`
    }),
    updateUser: builder.mutation<{}, IUserUpdate>({
      query: (payload: IUserUpdate) => ({
        url: "/user/update",
        method: "PATCH",
        body: payload
      })
    }),
    updateUserPassword: builder.mutation<{}, IUserUpdatePass>({
      query: (payload: IUserUpdatePass) => ({
        url: "/user/update_password",
        method: "PATCH",
        body: payload
      })
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
  useGetUserAddressQuery,
  useUpdateUserMutation,
  useUpdateUserPasswordMutation,
  useDeleteUserMutation
} = usersApiSlice;