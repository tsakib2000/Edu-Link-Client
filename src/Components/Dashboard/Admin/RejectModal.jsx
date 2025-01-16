/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const RejectModal = ({session,refetch}) => {
    const {_id,title}=session
    const axiosSecure=useAxiosSecure()
const rejectSession=async e=>{
    e.preventDefault()
    const form=e.target;
    const feedback=form.feedback.value;
const status='rejected'
const updateSession={feedback,status}
    try{
        await axiosSecure.patch(`/session/${_id}`,updateSession)
        toast.error('Session rejected')
        refetch()
        document.getElementById('reject_Modal').close()
        }catch(err){
            toast.error(err.message)
        }
   
}
    return (
        <div>
            

<dialog id="reject_Modal" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="text-3xl font-bold text-center">{title}</h1>
   
    <div className="modal-action">
      <form onSubmit={rejectSession}  method="dialog" className="w-full">
        
        <label className="font-bold">Rejection Feedback</label>
      <input
      
  type="text"
  name="feedback"
  placeholder="rejection Reason"
  className="input input-bordered input-success w-full" />
        <button  className="btn w-full mt-3">Update</button>
      </form>
      
    </div>
  </div>
</dialog>
        </div>
    );
};

export default RejectModal;