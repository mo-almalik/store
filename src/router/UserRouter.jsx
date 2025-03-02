
import React, { Suspense } from "react";
import Layout from "../layouts/Layout";
import Login from "../pages/auth/Login";
import Cart from "../pages/user/Cart";
import Home from "../pages/user/Home";
import Profile from "../pages/user/Profile";
import { Role } from "../utils/enum";
import Protected from "./Protected";
import Loading from "../components/Loading";
import Register from "../pages/auth/Register";
import NotFound from "../components/NotFound";

const ProductDetails = React.lazy(() => import("../pages/user/ProductDetails"));
const ProdactsPage = React.lazy(() => import("../pages/user/ProdactsPage"));

const UserRouter = [
    {path:'/' ,element:<Layout /> ,children:[
        {index:true,element:<Home />},
        {path:"login" ,element:<Login />},
        {path:"register" ,element:<Register />},
        {path:"profile" ,element:<Protected allowed={Role.USER}><Profile /></Protected> },
        {path:'cart',element:<Cart />},
        {path:'product/:slug',element: <Suspense fallback={<Loading/>}><ProductDetails /></Suspense>},
        {path:"products",element: <Suspense fallback={<Loading/>}><ProdactsPage /></Suspense>},
        {path:"*",element:<NotFound />}
    ]}
]

export default UserRouter