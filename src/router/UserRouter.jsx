import Layout from "../layouts/Layout";
import Home from "../pages/user/Home";

const UserRouter = [
    {path:'/' ,element:<Layout /> ,children:[
        {index:true,element:<Home />}
    ]}
]

export default UserRouter