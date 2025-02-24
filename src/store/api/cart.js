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
      query: ({productId,quantity}) => ({
        url: `/cart`,
        method: "PUT",
        body: {
          productId,
         quantity,
        },
      }),
      invalidatesTags: ["carts"],
    }),
    
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/cart`,
        method: "DELETE",
        body:{
          productId:id
        }
      }),
      invalidatesTags: ["carts"],
    }),
    clearCart:builder.mutation({
      query: () => ({
        url: "/cart/clear",
        method: "DELETE",
      }),
      invalidatesTags: ["carts"],
    }),


    applyCoupon: builder.mutation({
      query: (code) => ({
        url: `/cart/apply-coupon`,
        method: "POST",
        body:code,
      }),
      invalidatesTags: ["carts"],
    })
  }),
});

export const {
  useFetchCartsQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
  useClearCartMutation,
  useApplyCouponMutation,
} = cartApi;
