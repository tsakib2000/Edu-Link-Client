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
import Error from "../Pages/Error";
import UploadMaterials from "../Pages/Dashnboard/Tutor/UploadMaterials";


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
                element:<PrivateRoutes><ViewAllUser/></PrivateRoutes>
            },
            {
                path:'AllSession',
                element:<PrivateRoutes><AllSessions/></PrivateRoutes>
            },
            {
                path:'createStudySession',
                element:<PrivateRoutes><CreateStudySession/></PrivateRoutes>
            },
            {
                path:'studySession',
                element:<PrivateRoutes><AllStudySessions/></PrivateRoutes>
            },
            {
                path:'uploadMaterials',
                element:<PrivateRoutes><UploadMaterials/></PrivateRoutes>
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
    },
    {
        path:'*',
        element:<Error/>
    }
])

export default router