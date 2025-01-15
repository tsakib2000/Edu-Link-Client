import { useState } from "react";
import { imageUpload } from "../../../Api/utils";
import useAuth from "../../../Hooks/useAuth";
import { format} from "date-fns";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";
import './session.css'
const CreateStudySession = () => {
  const [loading,setLoading]=useState(false)
  const axiosSecure=useAxiosSecure();
    const {user}=useAuth();
const today=format(new Date(), "yyyy-MM-dd")
    const handleSubmit=async e=>{
        e.preventDefault();
        const form=e.target
    setLoading(true)
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const {image,...newData}=data;
        const photoURL=await imageUpload(image)
        
        newData.sessionPhoto=photoURL
        newData.tutorEmail=user?.email;
        newData.tutorName=user?.displayName;
 
        try{
          await axiosSecure.post('/sessions',newData)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your session created successfully",
            text:'Wait for Admin Approval',
            background:'#58a6af',
            customClass:{
              text:'text-white',
              title:'text-white font-bold'
            },
            showConfirmButton: false,
            timer: 2000
          });
          form.reset()
        }catch(err){
          toast.error(err.message)
        }finally{
          setLoading(false)
        }
    }
  return (
    <div className=" lg:w-full mx-auto p-8 bg-white  rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6 uppercase">
        Create Study Session
      </h2>
      <form  onSubmit={handleSubmit} className="grid grid-cols-2 lg:grid-cols-4 gap-4  ">
        {/* Session Title */}
        <div>
          <label className="block font-medium">Session Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter session title"
            className="w-full border  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Tutor Name */}
        <div>
          <label className="block font-medium">Tutor Name</label>
          <input
          value={user?.displayName}
            type="text"
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-md cursor-not-allowed"
          />
        </div>

        {/* Tutor Email */}
        <div>
          <label className="block font-medium">Tutor Email</label>
          <input
          value={user?.email}
            type="email"
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-md cursor-not-allowed"
          />
        </div>

        {/* Session Description */}
        <div>
          <label className="block font-medium">Session Description</label>
          <textarea
            name="description"
            required
            placeholder="Enter session description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Registration Start Date */}
        <div>
          <label className="block font-medium">Registration Start Date</label>
          <input
          defaultValue={today}
            type="date"
            name="registrationStart"
            min={today}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Registration End Date */}
        <div>
          <label className="block font-medium">Registration End Date</label>
          <input
          min={today}
            type="date"
            name="registrationEnd"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Class Start Date */}
        <div>
          <label className="block font-medium">Class Start Date</label>
          <input
          defaultValue={today}
          min={today}
            type="date"
            name="classStart"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Class End Date */}
        <div>
          <label className="block font-medium">Class End Date</label>
          <input
          min={today}
            type="date"
            name="classEnd"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Session Duration */}
        <div>
          <label className="block font-medium">
            Session Duration (in hour)
          </label>
          <input
            type="number"
            name="sessionDuration"
            required
            min="1"
            placeholder="Enter session duration"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div >
              <label className="label">
                <span className="label-text">Upload Session Photo</span>
              </label>
              <input
                className="file-input w-full max-w-xs"
                type="file"
                name="image"
                accept="image/*"
              />
            </div>
        {/* Registration Fee */}
        <div>
          <label className="block font-medium">Registration Fee</label>
          <input
          name="fee"
          value={0}
            type="number"
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-md cursor-not-allowed"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium">Status</label>
          <input
          value='pending'
          name="status"
            type="text"
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-md cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full uppercase bg-[#58a6af] flex justify-center text-white py-2 px-4 rounded-md hover:bg-[#a4d1d7] transition duration-300"
          >
        
       {
        loading?<FaSpinner className="animate-spin text-center" />:'create session'
       }
      
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStudySession;
