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
        }),
        getCategory: builder.query({
            query: (slug) => `/categories/${slug}`,
            providesTags: ["category"],
        }),
        createCategory: builder.mutation({
            query: (categoryData) => ({
                url: "/categories",
                method: "POST",
                body: categoryData,
            }),
            invalidatesTags: ["category"],
        }),
        updateCategory: builder.mutation({}),
        deleteCategory: builder.mutation({
            query: (slug) => ({
                url: `/categories/${slug}`,
                method: "DELETE",
            }),
            invalidatesTags: ["category"],
        }),
    })

})

export const {
    useGetCategoriesQuery,
    useGetCategoryQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,

} = categoryApi