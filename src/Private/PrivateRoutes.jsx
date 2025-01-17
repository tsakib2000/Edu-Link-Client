/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth();
    if(loading) return <LoadingSpinner/>
    if(user) return children
    return <Navigate to='/'/>
};

export default PrivateRoutes;