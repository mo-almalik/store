import React, { Suspense } from "react";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/admin/Home";
import Protected from "./Protected";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import Customers from "../pages/admin/Customers";
import Users from "../pages/admin/Users";
import Roles from "../pages/admin/Roles";
import AddProduct from "../pages/admin/AddProduct";

 

const Products = React.lazy(()=> import("../pages/admin/Products"));
const Orders = React.lazy(()=> import("../pages/admin/Orders"));
const Categories = React.lazy(()=> import("../pages/admin/Categories"));

const AdminRouter = [
    {path:'/dashboard',element :<Protected><AdminLayout /></Protected>, children:[
        {index:true,element:<Home />},
        {path:"products",element: <Suspense fallback={<Loading/>}><Products /></Suspense>},
        {path:"products/add",element:<AddProduct />},
        {path:"orders",element: <Suspense fallback={<Loading/>}><Orders /></Suspense>},
        {path:"categories",element: <Suspense fallback={<Loading main={'flex items-center  justify-center'} />}><Categories /></Suspense>},
        
        {path:"customers",element:<Customers />},
        {path:"users",element:<Users />},
        {path:"roles",element:<Roles />},



        // not found page
        {path:"*",element:<NotFound />}
    ]}
]

export default AdminRouter