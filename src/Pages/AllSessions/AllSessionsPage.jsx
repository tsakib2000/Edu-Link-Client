import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SessionCardHome from "../../Components/Home/sessionCardHome";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { useState } from "react";


const AllSessionsPage = () => {
    
    const axiosPublic=useAxiosPublic();
    const [sortedSessions, setSortedSessions] = useState([]);
    const {data:sessions,isLoading}=useQuery({
        queryKey:['session'],
        queryFn:async()=>{
            const { data } = await axiosPublic.get(`AllApprovedSessions/approved`);
            setSortedSessions(data)
            return data
        }
    })
    const handleSortByPrice=(order)=>{
  
        const sortedData = [...sessions].sort((a,b)=>{{
           const priceA = parseInt(a.fee) 
           const priceB= parseInt(b.fee)
          return order === "asc" ? priceA - priceB : priceB - priceA;}});
        
          setSortedSessions(sortedData); 
       
       }
    if(isLoading) return <LoadingSpinner/>
    
    return (
        <div className="my-5">
              <h1 className="text-4xl text-center mb-5 font-bold text-[#58a6af]">
        All Sessions
      </h1>
      <div className="flex justify-end my-3">
     <select
       onChange={(e)=>handleSortByPrice(e.target.value)}
       name="category"
       id="category"
       className="border p-4 rounded-lg"
    
     >
      <option value="">Sort by Price</option>
       <option value="asc">Lowest First</option>
       <option value="dsc"> Highest First</option>
     </select>
   </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {
           sortedSessions?.map(session=> <SessionCardHome key={session._id} session={session}/>)
        }
      </div>
        </div>
    );
};

export default AllSessionsPage;