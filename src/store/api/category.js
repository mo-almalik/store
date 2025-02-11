import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API = import.meta.env.VITE_API
const baseQuery = fetchBaseQuery({
    baseUrl: `${API}`,
})

export const categorySlice = createApi({
    reducerPath :'category',
    baseQuery,
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

export const {useGetCategoriesQuery} = categorySlice