/* eslint-disable react/prop-types */

const MaterialCard = ({ material, handleUpdate,handleDelete}) => {
  const { _id,sessionId, photoUrl, driveLink, tutorEmail, sessionTitle } = material;

  return (
    <>
      <div className="border bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
      <a href={photoUrl} target="_blank">
      <img
          src={photoUrl}
          alt="Material"
          className="w-full h-48 object-cover"
        />
      </a>

        {/* Content */}
        <div className="p-5">
          <h1 className=" font-semibold">{sessionTitle}</h1>
          {/* Study Session ID */}
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Session ID:</span> {sessionId}
          </p>

          {/* Google Drive Link */}
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 font-medium hover:underline mb-3"
          >
            📂 View Study Material
          </a>

          {/* Tutor Profile Link */}
          <p className="inline-block px-4 py-2 bg-[#58a6af] text-white text-sm font-medium rounded hover:bg-[#a4d1d7] transition">
            👨‍🏫 {tutorEmail}
          </p>
          <div className="flex justify-between mt-3">
            <button
              onClick={()=>handleUpdate(_id)}
              className="btn btn-sm bg-[#58a6af] hover:bg-[#a4d1d7] text-white rounded-md"
            >
              Update
            </button>
            <button onClick={()=>handleDelete(_id)} className="btn btn-sm bg-[#58a6af] hover:bg-[#a4d1d7] text-white rounded-md">
              Delete
            </button>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default MaterialCard;
