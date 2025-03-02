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
    endpoints: (builder) => ({
        userRegister : builder.mutation ({
            query: (userData) => ({
                url: "/auth/register",
                method: "POST",
                body: userData,
            }),
            invalidatesTags: ["auth"]
        })
    }),
});

 export const {
    useUserRegisterMutation,
 } = authApi;