import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SessionTable from "../../../Components/Dashboard/Admin/SessionTable";
import ApproveModal from "../../../Components/Dashboard/Admin/ApproveModal";
import { useState } from "react";
import ApprovedTable from "../../../Components/Dashboard/Admin/ApprovedTable";
import RejectModal from "../../../Components/Dashboard/Admin/RejectModal";
import RejectedTable from "../../../Components/Dashboard/Admin/RejectedTable";
import UpdateSessionModal from "../../../Components/Dashboard/Admin/UpdateSessionModal";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllSessions = () => {
  const [sessionId, setSessionId] = useState(null);
  // const [rejectId,setRejectId]=useState(null)
  const axiosSecure = useAxiosSecure();
  const { data: sessions = [], refetch } = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const { data } = await axiosSecure("/sessions");
      return data;
    },
  });
  const pending = sessions.filter((session) => session.status === "pending");
  const approved = sessions.filter((session) => session.status === "approved");
  const rejected = sessions.filter((session) => session.status === "rejected");

  const handleApprove = (id) => {
    setSessionId(id);
    document.getElementById("Approve_Modal").showModal();
  };
  const handleReject = (id) => {
    setSessionId(id);
    document.getElementById("reject_Modal").showModal();
  };

  const handleUpdate = (id) => {
    setSessionId(id);
    document.getElementById("update_Modal").showModal();
  };
  const { data: session = {} } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/session/${sessionId}`);
      return data;
    },
    enabled: !!sessionId,
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {

if (result.isConfirmed) {
try{
  await axiosSecure.delete(`/session/${id}`)
  
  Swal.fire({
    title: "Deleted!",
    text: "Session has been deleted.",
    icon: "success"
  });
  refetch()
}catch(err){
  toast.error(err.message)
}
}

   
    });
  };
  return (
    <>
      <div className="p-8 ">
        {/* Pending Sessions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">
            Pending Sessions
          </h2>
          {pending.length <= 0 ? (
            "NO PENDING SESSION HERE"
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="uppercase">
                    <th>image</th>
                    <th>Title</th>
                    <th>Tutor Email</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {pending.map((session) => (
                    <SessionTable
                      handleReject={handleReject}
                      handleApprove={handleApprove}
                      session={session}
                      key={session._id}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Approved Sessions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Approved Sessions
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="uppercase">
                <tr>
                  <th>image</th>
                  <th>Title</th>
                  <th>Job</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {approved.map((session) => (
                  <ApprovedTable
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    session={session}
                    key={session._id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Rejected Sessions */}
        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Rejected Sessions
          </h2>
          {rejected.length <= 0 ? (
            "NO REJECTED SESSION HERE "
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="uppercase">
                  <tr>
                    <th>image</th>
                    <th>Title</th>
                    <th>tutor email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {rejected.map((session) => (
                    <RejectedTable session={session} key={session._id} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
      <UpdateSessionModal session={session} refetch={refetch} />
      <RejectModal session={session} refetch={refetch} />
      <ApproveModal refetch={refetch} session={session} />
    </>
  );
};

export default AllSessions;
