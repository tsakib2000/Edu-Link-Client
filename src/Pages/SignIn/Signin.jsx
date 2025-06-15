import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/SocialLogin/googleLogin";
import GithubLogin from "../../Components/SocialLogin/GithubLogin";
import login from '../../assets/login.json'
import Lottie from "lottie-react";


const Signin = () => {

  const { signInUser } = useAuth();
  const navigate = useNavigate();


  const handleSignin = async e => {
    e.preventDefault();
const email =e.target.email.value;
const password=e.target.password.value;

    try {
      await signInUser(email, password)
      navigate('/')
      toast.success('Signin successful')
    
    } catch (err) {
      toast.error(err.message)
    }

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content grid grid-cols-12 ">



        <div className="card bg-base-100 col-span-12 md:col-span-7 w-full   shadow-2xl">

     <div className="mt-4 flex p-4 border border-[#58a6af] rounded-lg bg-base-200 text-base-content w-fit">
  <h3 className="font-bold text-[#58a6af] text-lg mb-2">🎯 Admin Login</h3>
  <p>
    <span className="font-semibold">Email:</span>{" "}
    <span className="font-mono">isakib49@gmail.com</span>
  </p>
  <p>
    <span className="font-semibold">Password:</span>{" "}
    <span className="font-mono">12356</span>
  </p>
</div>

          <form onSubmit={handleSignin} className="card-body">
            <h1 className="text-2xl text-center font-bold">Login now</h1>
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
            <GoogleLogin />

            <GithubLogin />

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  md:w-1/4"></span>

              <Link
                to="/signup"
                className="text-xs text-gray-500 uppercase  hover:underline"
              >
                or sign up
              </Link>

              <span className="w-1/5 border-b  md:w-1/4"></span>
            </div>
          </form>

        </div>
        <div className="hidden md:block  md:col-span-5">
          <Lottie animationData={login}></Lottie>
        </div>

      </div>
    </div>
  );
};

export default Signin;