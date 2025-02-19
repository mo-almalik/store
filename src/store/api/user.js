import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../../middleware/authMiddleware";




export const userApi = createApi({
  reducerPath:"user",
  baseQuery:baseQueryWithAuth,
  tagTypes:["user"],
  endpoints:(builder)=>({
    getProfile:builder.query({
        query: () => "/users/profile",
        providesTags: ["user"],
    })
  })
});

export const {useGetProfileQuery} = userApi