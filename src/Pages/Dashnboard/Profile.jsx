import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { FaCalendarAlt, FaSignInAlt, FaUserShield } from "react-icons/fa";


const Profile = () => {
   const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data:currentUser,isLoading}=useQuery({
        queryKey:['user'],
        queryFn:async()=>{
            const { data } = await axiosSecure.get(`/users/role/${user?.email}`);
            return data
        }
    })
    const profile = {
        name: currentUser?.name ,
        email: currentUser?.email ,
        role: currentUser?.role ,
        profilePic: currentUser?.photoURL ,
        createdAt: user?.metadata?.creationTime,
        lastLogin: user?.metadata?.lastSignInTime,
      };
if(isLoading) return <LoadingSpinner/>
    return (
        <div className=" mx-auto bg-white  p-6 text-center">
      <img 
        src={profile.profilePic} 
        alt="Profile" 
        className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300" 
      />
      <h2 className="text-2xl font-bold mt-4">{profile.name}</h2>
      <p className="text-gray-500">{profile.email}</p>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-center gap-2 text-lg">
          <FaUserShield className="text-blue-500" />
          <span>Role: {profile.role}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-lg">
          <FaCalendarAlt className="text-green-500" />
          <span>Account Created: {profile.createdAt}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-lg">
          <FaSignInAlt className="text-red-500" />
          <span>Last Login: {profile.lastLogin}</span>
        </div>
      </div>


    </div>
    );
};

export default Profile;