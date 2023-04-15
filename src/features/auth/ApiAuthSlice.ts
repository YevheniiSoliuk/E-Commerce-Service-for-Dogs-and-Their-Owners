import { apiSlice } from '../../controllers/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login/',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: '/user/register/',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    getPassRecoveryToken: builder.mutation({
      query: (email) => ({
        url: '/user/recovery_password',
        method: 'POST',
        body: { ...email }
      })
    }),
    setNewPassword: builder.mutation({
      query: (recoveryData) => ({
        url: '/user/password_recovery_page',
        method: 'POST',
        body: { ...recoveryData }
      })
    })
  })
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetPassRecoveryTokenMutation,
  useSetNewPasswordMutation
} = authApiSlice;
