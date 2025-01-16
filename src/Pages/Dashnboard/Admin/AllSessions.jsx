import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SessionTable from "../../../Components/Dashboard/Admin/SessionTable";
import ApproveModal from "../../../Components/Dashboard/Admin/ApproveModal";
import { useState } from "react";
import ApprovedTable from "../../../Components/Dashboard/Admin/ApprovedTable";
import RejectModal from "../../../Components/Dashboard/Admin/RejectModal";

const AllSessions = () => {
  const [sessionId,setSessionId]=useState(null)
  // const [rejectId,setRejectId]=useState(null)
  const axiosSecure = useAxiosSecure();
  const { data: sessions = [] ,refetch} = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const { data } = await axiosSecure("/sessions");
      return data;
    },
  });
  const pending = sessions.filter((session) => session.status === "pending");
  const approved = sessions.filter((session) => session.status === "approved");
  const rejected = sessions.filter((session) => session.status === "rejected");

  const handleApprove=id=>{
   
    setSessionId(id)
    document.getElementById('Approve_Modal').showModal()
     }
  const handleReject=id=>{
   
    setSessionId(id)
    document.getElementById('reject_Modal').showModal()
     }
     const { data: session = {} } = useQuery({
      queryKey: ["session",sessionId],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/session/${sessionId}`);
        return data;
      },
      enabled:!!sessionId
    });

  return (<>
    <div className="p-8 text-center">
      {/* Pending Sessions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">
          Pending Sessions
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>image</th>
                <th>Title</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             {
                pending.map(session=><SessionTable handleReject={handleReject} handleApprove={handleApprove} session={session} key={session._id}/>)
             }
            </tbody>
          </table>
        </div>
      </section>

      {/* Approved Sessions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Approved Sessions
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>image</th>
                <th>Title</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             {
                approved.map(session=><ApprovedTable  session={session} key={session._id}/>)
             }
            </tbody>
          </table>
        </div>
      </section>

      {/* Rejected Sessions */}
      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Rejected Sessions
        </h2>
        {rejected.length}
      </section>
    </div>
    <RejectModal session={session}  refetch={refetch}/>
    <ApproveModal refetch={refetch} session={session}/>
    </>
  );
};

export default AllSessions;
