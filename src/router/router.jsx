import { createBrowserRouter } from "react-router-dom";
import UserRouter from "./UserRouter";
import AdminRouter from "./AdminRouter";

const Routers = createBrowserRouter ([
    ...UserRouter,
    ...AdminRouter,
    
])

export default Routers