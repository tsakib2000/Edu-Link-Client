/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ApproveModal = ({session,refetch}) => {
    const {_id,title,fee}=session
    console.log(session);
    const axiosSecure=useAxiosSecure()
   const approveSession=async e=>{
e.preventDefault()
const form=e.target;
const fee=form.fee.value;
const status='approved';
const updateSession={fee,status}
try{
await axiosSecure.patch(`/session/${_id}`,updateSession)
toast.success('Session approved')
refetch()
document.getElementById('Approve_Modal').close()
}catch(err){
    toast.error(err.message)
}
   }
    return (
        <div>
            

<dialog id="Approve_Modal" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">{title}</h3>
   
    <div className="modal-action">
      <form onSubmit={approveSession} method="dialog" className="w-full">
        <label className="font-bold">Is the session free or paid?</label>
      <input
      defaultValue={fee}
  type="text"
  name="fee"
  placeholder="Type here"
  className="input input-bordered input-success w-full" />
        <button className="btn w-full mt-3">Update</button>
      </form>
      
    </div>
  </div>
</dialog>
        </div>
    );
};

export default ApproveModal;