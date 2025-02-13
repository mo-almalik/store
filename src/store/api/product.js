import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API = import.meta.env.VITE_API
const baseQuery = fetchBaseQuery({
    baseUrl: `${API}`,
})


export const productApi = createApi({
  reducerPath:"product",
  baseQuery,
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
    })
  })
})


export const {useGetProductsQuery} = productApi