import Layout from "../layouts/Layout";
import Login from "../pages/auth/Login";
import Cart from "../pages/user/Cart";
import Home from "../pages/user/Home";
import Profile from "../pages/user/Profile";
import { Role } from "../utils/enum";
import Protected from "./Protected";

const UserRouter = [
    {path:'/' ,element:<Layout /> ,children:[
        {index:true,element:<Home />},
        {path:"login" ,element:<Login />},
        {path:"profile" ,element:<Protected allowed={Role.USER}><Profile /></Protected> },
        {path:'cart',element:<Cart />},

    ]}
]

export default UserRouter