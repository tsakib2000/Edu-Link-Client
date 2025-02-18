import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SessionCardHome from "../../Components/Home/sessionCardHome";

const AllSessionsPage = () => {
    const axiosPublic=useAxiosPublic();
    const {data:sessions}=useQuery({
        queryKey:['session'],
        queryFn:async()=>{
            const { data } = await axiosPublic.get(`AllApprovedSessions/approved`);
            return data
        }
    })
    console.log(sessions);
    return (
        <div className="my-5">
              <h1 className="text-4xl text-center mb-5 font-bold text-[#58a6af]">
        All Sessions
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {
            sessions.map(session=> <SessionCardHome key={session._id} session={session}/>)
        }
      </div>
        </div>
    );
};

export default AllSessionsPage;