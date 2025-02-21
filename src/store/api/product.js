import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../../middleware/authMiddleware";




export const productApi = createApi({
  reducerPath:"product",
  baseQuery:baseQueryWithAuth,
  tagTypes:["product"],
  endpoints:(builder)=>({
    getProducts :builder.query({
        query:({page=1,limit=15,search})=>{
            const params = new URLSearchParams({ page, limit });
                if (search) {
                    params.append("search", search);
                }
                return `/products?${params.toString()}`;
        },
        providesTags: ["product"],
    }),

    getProduct: builder.query({
        query: (slug) => `/products/${slug}`,
        providesTags: ["product"],
    }),
  })
})


export const {useGetProductsQuery,useGetProductQuery} = productApi