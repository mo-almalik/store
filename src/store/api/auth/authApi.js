import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const API = import.meta.env.VITE_API
const baseQuery = fetchBaseQuery({
    baseUrl: `${API}`,
    credentials: "include"
})




export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQuery,
    tagTypes: ["auth"],
    endpoints: (builder) => ({}),
});

 export const {} = authApi;