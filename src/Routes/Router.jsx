import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";


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
        path:'signup',
        element:<Signup/>
    }
])

export default router