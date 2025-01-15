import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const GoogleLogin = () => {
  const {googleSignIn,setUser}=useAuth();
  const navigate=useNavigate();
  const axiosPublic=useAxiosPublic();
  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(async(data) => {
      toast.success("SignIn successful");
      setUser(data);
      const userInfo={
        name:data.user.displayName,
        email:data.user.email,
        photoURL:data.user.photoURL,
        role:'student'
   }
      await   axiosPublic.post('/users',userInfo)
      navigate("/");
    })
    .catch((error) => {
      const showError=(error.message.split('/')[1].slice(0,18));
      toast.error(showError)
    });
  }
    return (
        <div>
      <button type="button" onClick={handleGoogleSignIn} className="btn btn-outline w-full border-[#58a6af] text-[#58a6af]">Google Login</button>
    
        </div>
    );
};

export default GoogleLogin;