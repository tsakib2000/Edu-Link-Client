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
import DashboardHome from "../Pages/Dashnboard/DashboardHome";
import ViewTutorMaterials from "../Pages/Dashnboard/Tutor/ViewTutorMaterials";
import AllMaterials from "../Pages/Dashnboard/Admin/AllMaterials";
import SessionDetails from "../Pages/Home/SessionDetails";
import ViewBooked from "../Pages/Dashnboard/Student/ViewBooked";
import CreateNote from "../Pages/Dashnboard/Student/CreateNote";
import ManagePersonalNotes from "../Pages/Dashnboard/Student/ManagePersonalNotes";
import ViewStudyMaterials from "../Pages/Dashnboard/Student/ViewStudyMaterials";
import Checkout from "../Pages/PaymentPage/Checkout";
import BookedDetails from "../Pages/Dashnboard/Student/BookedDetails";
import AllSessionsPage from "../Pages/AllSessions/AllSessionsPage";
import Profile from "../Pages/Dashnboard/Profile";
import Overview from "../Pages/Dashnboard/Overview";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/studySessions",
        element:<AllSessionsPage/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <SessionDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "viewBooked",
        element: (
          
            <ViewBooked />
        
        ),
      },
 
      {
        path: "createNote",
        element:<CreateNote />
      },
      {
        path:'manageNotes',
        element:<ManagePersonalNotes/>
      },
      {
        path:'ViewMaterial',
        element:<ViewStudyMaterials/>
      },
      {

        path:'bookedDetails/:id',
        element:<BookedDetails/>
      },
      {
        path: "dashboardHome",
        element: (
          <PrivateRoutes>
            <DashboardHome />
          </PrivateRoutes>
        ),
      },
      {
        path: "viewAllUser",
        element: (
          <PrivateRoutes>
            <ViewAllUser />
          </PrivateRoutes>
        )
      },
      {
        path: "AllSession",
        element: (
          <PrivateRoutes>
            <AllSessions />
          </PrivateRoutes>
        ),
      },
      {
        path: "viewAllMaterials",
        element: (
          <PrivateRoutes>
            <AllMaterials />
          </PrivateRoutes>
        ),
      },
      {
        path: "createStudySession",
        element: (
          <PrivateRoutes>
            <CreateStudySession />
          </PrivateRoutes>
        ),
      },
      {
        path: "studySession",
        element: (
          <PrivateRoutes>
            <AllStudySessions />
          </PrivateRoutes>
        ),
      },
      {
        path: "uploadMaterials",
        element: (
          <PrivateRoutes>
            <UploadMaterials />
          </PrivateRoutes>
        ),
      },
      {
        path: "ViewMaterials",
        element: (
          <PrivateRoutes>
            <ViewTutorMaterials />
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile/>
          </PrivateRoutes>
        ), 
      },
      {
        path: "overview",
        element: (
          <PrivateRoutes>
           <Overview/>
          </PrivateRoutes>
        ), 
      }
    ],
  },
  {
  
      path:'checkout/:id',
      element:<PrivateRoutes><Checkout/></PrivateRoutes>
    
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
