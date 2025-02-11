import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./api/category";


const store = configureStore({
    reducer:{
     [categorySlice.reducerPath] : categorySlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        // middleware
        categorySlice.middleware
    )
})
export default store