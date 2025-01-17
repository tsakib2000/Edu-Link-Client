import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

/* eslint-disable react/prop-types */
const MaterialUpdateModal = ({material,refetch}) => {
    const axiosSecure=useAxiosSecure();
    const {_id,sessionTitle,sessionId,tutorEmail,driveLink,photoUrl}=material
    const handleUpdate=async e=>{

        e.preventDefault();
        document.getElementById('Material_Update').close()
       const newDriveLink=e.target.driveLink.value;
       const newPhotoUrl=e.target.photoUrl.value;
       const updateMaterial={
        driveLink:newDriveLink,
        photoUrl:newPhotoUrl

       } 
       try{
        await axiosSecure.patch(`/material/${_id}`,updateMaterial)
          Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Material Updated successfully",
                  
                    background:'#58a6af',
                    customClass:{
                      text:'text-white',
                      title:'text-white font-bold'
                    },
                    showConfirmButton: false,
                    timer: 2000
                  });
                  refetch()

       }catch(err){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:` ${err.message}!`,
          showConfirmButton: false,
          timer: 1500
        });
       }
    }
  return (
    <>
  
<dialog id="Material_Update" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form method="dialog">
    
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <div className="modal-action flex justify-center w-full">
    <form onSubmit={handleUpdate}  className="space-y-4 w-full">
        {/* Session Title (Read-only) */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Session Title
          </label>
          <p className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
            {sessionTitle}
          </p>
        </div>

        {/* Session ID (Read-only) */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Session ID
          </label>
          <p className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
            {sessionId}
          </p>
        </div>

        {/* Tutor Email (Read-only) */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Tutor Email
          </label>
          <p className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
            {tutorEmail}
          </p>
        </div>

        {/* Upload Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Material Image
          </label>
          <input
          defaultValue={photoUrl}
            type="text"
            name="photoUrl"
        
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Google Drive Link */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Google Drive Link
          </label>
          <input
            type="url"
            name="driveLink"
            defaultValue={driveLink}
            placeholder="https://drive.google.com/..."
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-[#58a6af] text-white w-full "
        >
          Upload Material
        </button>
      </form>
    </div>
  </div>
</dialog>
    </>
  );
};

export default MaterialUpdateModal;
