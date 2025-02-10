import { createBrowserRouter } from "react-router-dom";
import UserRouter from "./UserRouter";

const Routers = createBrowserRouter ([
    ...UserRouter
])

export default Routers