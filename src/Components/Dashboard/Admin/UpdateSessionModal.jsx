/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const UpdateSessionModal = ({session,refetch}) => {
    const axiosSecure=useAxiosSecure()
    const {
        _id,
        title,
        description,
        fee,
        sessionDuration,
      
        sessionPhoto,
        tutorName,
        tutorEmail,
        classStart,
        classEnd,
        registrationStart,
        registrationEnd,
      } = session;
      
 const handleSubmit=async e=>{
    e.preventDefault();
    const formData= new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries());
    try{
      await axiosSecure.patch(`/session/${_id}`,updateData)
      refetch()
      document.getElementById("update_Modal").close();
      toast.success('session data updated successfully')
    }catch(err){
        toast.error(err.message)
    }
 }
    return (
        <div>
      <dialog id="update_Modal" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <form method="dialog">
      
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg uppercase text-center">update session</h3>
    
    <div className="w-full p-4">
    <form onSubmit={handleSubmit} className="space-y-4">
        {/* Session ID (Read-only) */}
        <div>
          <label className="block font-medium">Session ID</label>
          <p className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
            {_id}
          </p>
        </div>

        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
         
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={description}
           
            className="textarea textarea-bordered w-full"
            rows="3"
            required
          />
        </div>

        {/* Fee */}
        <div>
          <label className="block font-medium">Fee ($)</label>
          <input
            type="number"
            name="fee"
            defaultValue={fee}
       
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Session Duration */}
        <div>
          <label className="block font-medium">Session Duration (weeks)</label>
          <input
            type="number"
            name="sessionDuration"
            defaultValue={sessionDuration}
            
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium">Status</label>
          <select
            name="status"
            
            
            className="select select-bordered w-full"
          >
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Session Photo URL */}
        <div>
          <label className="block font-medium">Session Photo URL</label>
          <input
            type="url"
            name="sessionPhoto"
            defaultValue={sessionPhoto}
   
            className="input input-bordered w-full"
          />
        </div>

        {/* Tutor Name (Read-only) */}
        <div>
          <label className="block font-medium">Tutor Name</label>
          <p className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
            {tutorName}
          </p>
        </div>

        {/* Tutor Email (Read-only) */}
        <div>
          <label className="block font-medium">Tutor Email</label>
          <p className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
            {tutorEmail}
          </p>
        </div>

        {/* Class Start Date */}
        <div>
          <label className="block font-medium">Class Start Date</label>
          <input
            type="date"
            name="classStart"
            defaultValue={classStart}
        
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Class End Date */}
        <div>
          <label className="block font-medium">Class End Date</label>
          <input
            type="date"
            name="classEnd"
            defaultValue={classEnd}
         
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Registration Start Date */}
        <div>
          <label className="block font-medium">Registration Start Date</label>
          <input
            type="date"
            name="registrationStart"
            defaultValue={registrationStart}
           
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Registration End Date */}
        <div>
          <label className="block font-medium">Registration End Date</label>
          <input
            type="date"
            name="registrationEnd"
            defaultValue={registrationEnd}
         
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Update Session
        </button>
      </form>
    </div>
  </div>
</dialog>
    </div>
    );
};

export default UpdateSessionModal;