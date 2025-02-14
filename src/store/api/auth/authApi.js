import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "./authSlice";


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
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: {
                    email: credentials.email,
                    password:  credentials.password,
                },
            }),
        }),
        userLogout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["auth"],

        }),
        authState :builder.query({
            query: () => ({
                url: "/auth/check-auth-role",
                method: "GET",
            }),
            providesTags: ["auth"],
        }),

    }),
});

 export const {useLoginMutation,useAuthStateQuery,useUserLogoutMutation} = authApi;