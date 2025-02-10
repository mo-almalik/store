import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/admin/Home";

const AdminRouter = [
    {path:'/dashboard',element :<AdminLayout />, children:[
        {index:true,element:<Home />}
    ]}
]

export default AdminRouter