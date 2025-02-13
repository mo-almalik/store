import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = import.meta.env.VITE_API;
const baseQuery = fetchBaseQuery({ baseUrl: `${API}` });

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQuery,
  tagTypes: ["carts"],
  endpoints: (builder) => ({
    fetchCarts: builder.query({
      query: () => "/cart",
      providesTags: ["carts"],
    }),

    addCart: builder.mutation({
      query: (carData) => ({
        url: "/cart",
        method: "POST",
        body: carData,
      }),
      invalidatesTags: ["carts"],
    }),

    updateCart: builder.mutation({
      query: ({ id, carData }) => ({
        url: `/cart/${id}`,
        method: "PUT",
        body: carData,
      }),
      invalidatesTags: ["carts"],
    }),
    
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["carts"],
    }),
  }),
});

export const {
  useFetchCartsQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
