import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SessionCard from "../../../Components/Dashboard/Tutor/sessionCard";


const AllStudySessions = () => {
    const {user}=useAuth()
    const axiosSecure= useAxiosSecure();
const {data:sessions=[]}=useQuery({
    queryKey:['sessions',user?.email],
    enabled:!!user?.email,
    queryFn:async()=>{
        const {data}= await axiosSecure(`/sessions/${user?.email}`)
        return data
    }
})

console.log(sessions);
    return (
        <div>
           <div className="flex justify-center items-center">
           <h1 className="text-2xl md:text-4xl font-bold pb-3 text-[#58a6af] border-b-2 inline text-center my-5">Posted Study Sessions</h1>
           </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
            {
                sessions.map(session=><SessionCard session={session} key={session._id}/>)
            }
        </div>
        </div>
    );
};

export default AllStudySessions;