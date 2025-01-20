/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth();
    const {pathname}=useLocation();
    if(loading) return <LoadingSpinner/>
    if(user) return children
    return <Navigate state={pathname} to='/signin'/>
};

export default PrivateRoutes;