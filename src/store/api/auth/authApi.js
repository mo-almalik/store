import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "./authSlice";


const API = import.meta.env.VITE_API
const baseQuery = fetchBaseQuery({
    baseUrl: `${API}`,
    credentials: "include",
    prepareHeaders: (headers) => {
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 403) {
        console.log("Access token expired, attempting refresh...");


        const refreshResult = await baseQuery("/auth/refresh-token", api, extraOptions);
        if (refreshResult.data) {
            console.log("Token refreshed, retrying original request...");
            // إعادة إرسال الطلب الأصلي بعد تجديد التوكن
            result = await baseQuery(args, api, extraOptions);
        } else {
            console.log("Refresh token expired, logging out...");
            api.dispatch(logout()); // تسجيل خروج المستخدم
        }



    }

    return result;
};

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithReauth,
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
        logout: builder.mutation({}),
        authState :builder.query({
            query: () => ({
                url: "/auth/check-auth-role",
                method: "GET",
            }),
            providesTags: ["auth"],
        }),

    }),
});

 export const {useLoginMutation,useAuthStateQuery} = authApi;