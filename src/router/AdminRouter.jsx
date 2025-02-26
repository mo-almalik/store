import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/admin/Home";
import Protected from "./Protected";

const AdminRouter = [
    {path:'/dashboard',element :<Protected><AdminLayout /></Protected>, children:[
        {index:true,element:<Home />}
    ]}
]

export default AdminRouter