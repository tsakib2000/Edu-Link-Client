import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/SocialLogin/googleLogin";
import GithubLogin from "../../Components/SocialLogin/GithubLogin";


const Signin = () => {
    const {signInUser}=useAuth();
const navigate=useNavigate();
    const handleSignin =async e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password = form.password.value;
        try{
            await  signInUser(email,password)
            navigate('/')
            toast.success('Signin successful')
        }catch(err){
            toast.error(err.message)
        }
    
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignin} className="card-body">
      
        
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#58a6af] text-white rounded-none">
                  Signin
                </button>
              </div>
              <div className="divider">OR</div>
              <GoogleLogin/>
              
              <GithubLogin/>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signin;