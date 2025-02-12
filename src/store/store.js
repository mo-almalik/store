import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./api/category";
import { productSlice } from "./api/product";


const store = configureStore({
    reducer:{
     [categorySlice.reducerPath] : categorySlice.reducer,
     [productSlice.reducerPath] : productSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        // middleware
        categorySlice.middleware,
        productSlice.middleware
    )
})
export default store