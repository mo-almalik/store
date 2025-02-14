import Layout from "../layouts/Layout";
import Login from "../pages/auth/Login";
import Home from "../pages/user/Home";
import Profile from "../pages/user/Profile";

const UserRouter = [
    {path:'/' ,element:<Layout /> ,children:[
        {index:true,element:<Home />},
        {path:"login" ,element:<Login />},
        {path:"profile" ,element:<Profile />},

    ]}
]

export default UserRouter