/* eslint-disable react/prop-types */

const StudyMaterialCard = ({ material }) => {
  const { sessionId, photoUrl, driveLink, tutorEmail, sessionTitle } = material;

  const handleDownload = () => {
    const imageUrl = {photoUrl}; 
    const anchor = document.createElement('a');
    anchor.href = imageUrl;
    anchor.download =`material.jpg`; 
    anchor.click();
  };
  return (
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
        <div className="flex justify-between">
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 font-medium hover:underline mb-3"
          >
            📂 View Study Material
          </a>

          <button
          onClick={handleDownload}
          className="btn btn-sm bg-[#58a6af] text-white">
            Download Image
          </button>
        </div>

        {/* Tutor Profile Link */}
        <p className="inline-block px-4 py-2 bg-[#58a6af] text-white text-sm font-medium rounded hover:bg-[#a4d1d7] transition">
          👨‍🏫 {tutorEmail}
        </p>
      </div>
    </div>
  );
};

export default StudyMaterialCard;
