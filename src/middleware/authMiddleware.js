import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, userLogout } from "../store/api/auth/authSlice";


const API = import.meta.env.VITE_API;

const baseQuery = fetchBaseQuery({
    baseUrl: `${API}`,
    credentials: "include"
});

const baseQueryWithAuth = async (args, api, extraOptions) => {
    console.log(" Request sent:", args);
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 403) {
      

        const refreshResult = await baseQuery({
            url: '/auth/refresh-token',
            method: 'PUT'
        }, api, extraOptions);

        if (refreshResult.data) {

            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(userLogout());
            api.dispatch(logout());
            return refreshResult;  
        }
    }

    return result;
};

export default baseQueryWithAuth;

