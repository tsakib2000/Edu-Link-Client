/* eslint-disable react/prop-types */

import { imageUpload } from "../../../Api/utils";


const UploadMaterialCard = ({user,session}) => {
 const {_id,title}=session
 const handleMaterialUpload=async e=>{
    e.preventDefault();
  const driveLink =e.target.link.value;
  const image=e.target.image.files[0]
  const photoUrl= await imageUpload(image)
  const material={
    sessionTitle:title,
    sessionId:_id,
    driveLink,
   photoUrl
  }
  console.table(material);
}
    return (
        <div className=" mx-auto p-8 rounded-sm bg-[#cedadb]">
        <form onSubmit ={handleMaterialUpload} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 uppercase">
              Title
            </label>
            <p className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
        {title}
            </p>
          </div>

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
              className="input input-bordered w-full h-40"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-[#58a6af] text-white rounded-none border-none w-full">
            Upload Material
          </button>
        </form>
      </div>
    );
};

export default UploadMaterialCard;