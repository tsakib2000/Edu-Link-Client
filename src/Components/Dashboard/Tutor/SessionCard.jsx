/* eslint-disable react/prop-types */

const SessionCard = ({ session }) => {
  const {
    title,
    sessionPhoto,
    status,
    description,
    classEnd,
    classStart,
    fee,
    registrationEnd,
    registrationStart,
    sessionDuration,

  } = session;
  console.log(session);
  return (
 <div className="mx-auto flex flex-col justify-between h-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Session Image */}
      <img
        src={sessionPhoto}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-5">
        {/* Title and Status */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <span
            className={`px-2 py-1 text-xs font-semibold rounded ${
              status === 'pending'
                ? 'bg-yellow-100 text-yellow-700'
                : status === 'approved'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {status}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {description}
        </p>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
          <div>
            <p className="font-medium">Reg. Start:</p>
            <p>{registrationStart}</p>
          </div>
          <div>
            <p className="font-medium">Reg. End:</p>
            <p>{registrationEnd}</p>
          </div>
          <div>
            <p className="font-medium">Class Start:</p>
            <p>{classStart}</p>
          </div>
          <div>
            <p className="font-medium">Class End:</p>
            <p>{classEnd}</p>
          </div>
        </div>

        {/* Fee and Duration */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-blue-600">
            Fee: ${fee}
          </p>
          <p className="text-sm text-gray-600">
            Duration: {sessionDuration} Hours
          </p>
        </div>

      

      </div>
    </div>
  );
};

export default SessionCard;
