import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../Api/utils";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import GoogleLogin from "../../Components/SocialLogin/googleLogin";
import GithubLogin from "../../Components/SocialLogin/GithubLogin";
import Lottie from "lottie-react";
import registration from '../../assets/registration.json'

const Signup = () => {
  const { createUser, setUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const axiosPublic=useAxiosPublic()
  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const role= form.role.value;
  
    const photoURL = await imageUpload(image);

    
    createUser(email, password)
    .then( async (data) => {
console.log(data);
      updateUserProfile(name, photoURL);
      setUser(data.user);

      const userInfo = {
        name,
        email,
        photoURL,
        role
      }
     const {data:users} = await axiosPublic.post('/users',userInfo)
console.log(users);
      navigate('/');
     toast.success('Signup successful')
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
      <div className="hidden md:block">
<Lottie animationData={registration}></Lottie>
         </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignup} className="card-body">
          <h1 className="text-2xl text-center font-bold">Signup now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Photo</span>
              </label>
              <input
                className="file-input w-full max-w-xs"
                type="file"
                name="image"
                accept="image/*"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <select name="role" className="select select-bordered w-full max-w-xs">
                <option value='select Role'>
                 Select Role
                </option>
                <option value='student'>Student</option>
                <option value='tutor'>Tutor</option>
                
                
              </select>
            </div>
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
                Signup
              </button>
            </div>
            <div className="divider">OR</div>
          <GoogleLogin/>
          <GithubLogin/>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/signin"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
