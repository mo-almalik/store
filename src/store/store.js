import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./api/category";
import { productApi } from "./api/product";
import { cartApi } from "./api/cart";
import { authApi } from "./api/auth/authApi";
import authReducer from "./api/auth/authSlice"


const store = configureStore({
    reducer:{
     [categoryApi.reducerPath] : categoryApi.reducer,
     [productApi.reducerPath] : productApi.reducer,
     [cartApi.reducerPath] : cartApi.reducer,
     [authApi.reducerPath] : authApi.reducer,
      auth:authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        // middleware
        categoryApi.middleware,
        productApi.middleware,
        cartApi.middleware,
        authApi.middleware,
        
    ),
    devTools: true,
})
export default store