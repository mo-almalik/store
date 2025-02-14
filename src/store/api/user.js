import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API = import.meta.env.VITE_API
const baseQuery = fetchBaseQuery({
    baseUrl: `${API}`,
    credentials: "include",

})

export const userApi = createApi({
  reducerPath:"user",
  baseQuery,
  tagTypes:["user"],
  endpoints:(builder)=>({
    getProfile:builder.query({
        query: () => "/users/profile",
        providesTags: ["user"],
    })
  })
});

export const {useGetProfileQuery} = userApi