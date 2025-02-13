import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./api/category";
import { productApi } from "./api/product";
import { cartApi } from "./api/cart";


const store = configureStore({
    reducer:{
     [categoryApi.reducerPath] : categoryApi.reducer,
     [productApi.reducerPath] : productApi.reducer,
     [cartApi.reducerPath] : cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        // middleware
        categoryApi.middleware,
        productApi.middleware,
        cartApi.middleware
    )
})
export default store