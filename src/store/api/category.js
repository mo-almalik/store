import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../../middleware/authMiddleware";




export const categoryApi = createApi({
    reducerPath :'category',
    baseQuery :baseQueryWithAuth,
    tagTypes:["category"],
    endpoints: (builder) => ({
        getCategories :builder.query({
            query: ({ page = 1, limit=10, search }) => {
                const params = new URLSearchParams({ page, limit });
                if (search) {
                    params.append("search", search);
                }
                return `/categories?${params.toString()}`;
            },
            providesTags: ["category"],
        })
    })

})

export const {useGetCategoriesQuery} = categoryApi