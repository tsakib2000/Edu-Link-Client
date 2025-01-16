
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure=axios.create(
    {
          baseURL:'http://localhost:5000'
    }
)
const useAxiosSecure = () => {
    const navigate=useNavigate();
    const {signOutUser}=useAuth()
axiosSecure.interceptors.request.use((config)=>{
    const token=localStorage.getItem('access_token')
   config.headers.authorization = `Bearer ${token}`;
    return config
},err=>{
    return Promise.reject(err)
});
//intercepts 401 & 403 status
axiosSecure.interceptors.response.use((response)=>{
return response
},async error=>{
    const status=error.response.status;
    if(status === 401 || status === 403){
        navigate('/signin')
       await signOutUser();
    }
    return Promise.reject(error)
})
    return axiosSecure
};

export default useAxiosSecure;