/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const NoteUpdateModal = ({note,refetch}) => {
    const {_id,noteTitle,description}=note
    
    const axiosSecure=useAxiosSecure();
    const handleUpdate=async e=>{
        e.preventDefault()
       const description=e.target.description.value;
try{
await axiosSecure.patch(`/note/${_id}`,{description})
Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Note Data Updated successfully",
        
            background:'#58a6af',
            customClass:{
              text:'text-white',
              title:'text-white font-bold'
            },
            showConfirmButton: false,
            timer: 2000
          });
          refetch();
document.getElementById("updateNote").close();
}catch(err){
toast.error(err.message)
}
    }
    return (
    <div>
        <dialog id="updateNote" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h1 className="text-3xl font-bold text-center">{noteTitle}</h1>
  
            <div className="modal-action">
              <form onSubmit={handleUpdate} method="dialog" className="w-full">
                <label className="font-bold">Note description:</label>
                <textarea
                  type="text"
                  name="description"
                  placeholder=""
                  defaultValue={description}
                  className="input input-bordered input-success h-40 w-full"
                />
                <button className="btn w-full bg-teal-500 text-white mt-3">Update</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    );
};

export default NoteUpdateModal;