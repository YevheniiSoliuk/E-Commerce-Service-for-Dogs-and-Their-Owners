import { RootState } from './../store/store';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8090",
  credentials: "include",
  mode: "cors",
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.token;

    if(token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  }
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: builder => ({}),
})

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if(result?.error?.status === 403)
//   {
//     console.log("sending refresh token");

//     const refreshResult = await baseQuery("/refresh", api, extraOptions);
//     console.log(refreshResult);

//     if(refreshResult?.data)
//     {
//       const user = api.getState().auth.user;

//       api.dispatch(setCredentials({...refreshResult.data, user}));
//       result = await baseQuery(args, api, extraOptions);
//     }
//     else
//     {
//       api.dispatch(logOut());
//     }
//   }

//   return result;
// }

