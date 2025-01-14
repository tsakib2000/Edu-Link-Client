/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth();
    if(loading) return <LoadingSpinner/>
    if(user) return children
    return <NavLink to='/'/>
};

export default PrivateRoutes;