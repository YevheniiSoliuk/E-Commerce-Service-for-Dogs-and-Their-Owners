import { RootState } from './../store/store';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';


const baseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:8090",
  credentials: "include",
  prepareHeaders: (headers, {getState}) => {
    // const token: string = getState.auth.token;

    // if(token)
    // {
    //   headers.set("autorization", `Bearer ${token}`);
    // }

    return headers;
  }
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: builder => ({}),
})