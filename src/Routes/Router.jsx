import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/SignIn/Signin";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoutes from "../Private/PrivateRoutes";


const router =createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><Dashboard/></PrivateRoutes>
    },
    {
        path:'signup',
        element:<Signup/>
    },
    {
        path:'signin',
        element:<Signin/>
    }
])

export default router