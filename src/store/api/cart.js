import { createApi, } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../../middleware/authMiddleware";



export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQueryWithAuth,
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
        body: {
          productId: carData.productId,
          quantity: carData.quantity,
        },
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
