import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SessionCardHome from "../../Components/Home/sessionCardHome";

const StudySessionHome = () => {
    const axiosPublic=useAxiosPublic();
    const {data:sessions=[]}=useQuery({
        queryKey:['session'],
        queryFn:async()=>{
            const {data}= await axiosPublic('/approvedSessions/approved')
            return data
        }
    })

    return (
        <div>
    <h1 className="text-4xl text-center mb-5 font-bold">  Study Sessions</h1>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
{
    sessions.map(session=><SessionCardHome session={session} key={session._id}/>)
}
     </div>
    
        </div>
    );
};

export default StudySessionHome;