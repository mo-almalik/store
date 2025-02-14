import Layout from "../layouts/Layout";
import Login from "../pages/auth/Login";
import Home from "../pages/user/Home";

const UserRouter = [
    {path:'/' ,element:<Layout /> ,children:[
        {index:true,element:<Home />},
        {path:"login" ,element:<Login />}
    ]}
]

export default UserRouter