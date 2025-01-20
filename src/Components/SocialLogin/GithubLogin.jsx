import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";



const GithubLogin = () => {
    const {githubSignIn,setUser}=useAuth();
    const navigate=useNavigate();
  const axiosPublic=useAxiosPublic();
const handleGithubLogin=()=>{
  githubSignIn()
  .then(async(data) => {
    toast.success("SignIn successful");
    setUser(data.user);
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
    const showError=(error.message);
    toast.error(showError)
  });
}
    return (<div>
      <button onClick={handleGithubLogin} type="button" className="btn btn-outline w-full border-[#58a6af] text-[#58a6af]">
        Sign In with Github
      </button>
      </div>
    );
};

export default GithubLogin;