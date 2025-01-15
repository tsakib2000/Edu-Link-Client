import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/SignIn/Signin";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoutes from "../Private/PrivateRoutes";
import CreateStudySession from "../Pages/Dashnboard/Tutor/CreateStudySession";
import AllStudySessions from "../Pages/Dashnboard/Tutor/AllStudySessions";
import ViewAllUser from "../Pages/Dashnboard/Admin/ViewAllUser";
import AllSessions from "../Pages/Dashnboard/Admin/AllSessions";


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
        element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
        children:[
            {
                path:'viewAllUser',
                element:<ViewAllUser/>
            },
            {
                path:'AllSession',
                element:<AllSessions/>
            },
            {
                path:'createStudySession',
                element:<CreateStudySession/>
            },
            {
                path:'studySession',
                element:<AllStudySessions/>
            }
        ]
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