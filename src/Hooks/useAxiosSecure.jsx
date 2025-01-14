
import axios from "axios";

const axiosSecure=axios.create(
    {
          baseURL:'http://localhost:5000'
    }
)
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use((config)=>{
return config
    })
    return axiosSecure
};

export default useAxiosSecure;