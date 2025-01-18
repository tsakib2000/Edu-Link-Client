/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { imageUpload } from "../../../Api/utils";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";

const UploadMaterialCard = ({ user, session }) => {
  const { _id, title,tutorEmail,sessionPhoto } = session;
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
console.log(session);
  const handleMaterialUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    const driveLink = e.target.link.value;
    const image = e.target.image.files[0];
    const photoUrl = await imageUpload(image);
    const material = {
      sessionTitle: title,
      sessionId: _id,
      tutorEmail,
      driveLink,
      photoUrl,
    };
    try {
      await axiosSecure.post("/materials", material);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Material Uploaded Successfully",
  
        background: "#58a6af",
        customClass: {
          text: "text-white",
          title: "text-white font-bold",
        },
        showConfirmButton: false,
        timer: 2000,
      });
      e.target.reset()
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" mx-auto p-8 rounded-sm bg-[#cedadb]">
      <form onSubmit={handleMaterialUpload} className="space-y-6">
        {/* Title */}
      <img className="h-48 object-cover" src={sessionPhoto} alt="" />

        {/* Study Session ID (Read-only) */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 uppercase">
            Study Session ID
          </label>
          <p className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
            {_id}
          </p>
        </div>

        {/* Tutor Email (Read-only) */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 uppercase">
            Tutor Email
          </label>
          <p className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
            {user?.email}
          </p>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 uppercase">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered w-full"
          />
        </div>

        {/* Google Drive Link */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 uppercase">
            Google Drive Link
          </label>
          <textarea
            type="url"
            name="link"
            placeholder="https://drive.google.com/..."
            className="input input-bordered w-full h-20"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-[#58a6af] text-white rounded-none border-none w-full"
        >
                {
                    loading?<FaSpinner className="animate-spin text-center" />:' Upload Material'
                   }
         
        </button>
      </form>
    </div>
  );
};

export default UploadMaterialCard;
