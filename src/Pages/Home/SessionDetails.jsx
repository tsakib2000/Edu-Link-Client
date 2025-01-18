import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import {  isAfter, isBefore, parseISO } from "date-fns";
import toast from "react-hot-toast";
const SessionDetails = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  console.log(id);
  const { data: session = {} } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/session/${id}`);
      return data;
    },
  });

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
    review,
  } = session;
  const currentDate = new Date();
  const startDate = registrationStart ? parseISO(registrationStart) : null;
  const endDate = registrationEnd ? parseISO(registrationEnd) : null;
  const isRegistrationOpen =
    isAfter(currentDate, startDate) && isBefore(currentDate, endDate);

  const handleBookNow = () => {
   
     if(fee<=0){
        toast.success('session booked')
     }else{
        navigate(`/dashboard/checkout/${_id}`);

     }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 py-10 px-5">
        <div className="max-w-5xl mx-auto bg-white  rounded-lg overflow-hidden">
          <img
            src={sessionPhoto}
            alt={title}
            className="w-full h-72 object-cover"
          />

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-gray-600 mb-6">
              Instructor: {tutorName} ({tutorEmail})
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700">Description:</h3>
                <p className="text-gray-600 mt-2">{description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700">Details:</h3>
                <p className="text-gray-600">
                  Session Duration: {sessionDuration} hours
                </p>
                <p className="text-gray-600">
                  Fee: {fee === "0" ? "Free" : `$${fee}`}
                </p>
                <p className="text-gray-600">
                  Class Schedule: {classStart} | {classEnd}
                </p>
                <p className="text-gray-600">
                  Registration: {registrationStart} | {registrationEnd}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center items-end">
              <button
                onClick={handleBookNow}
                disabled={!isRegistrationOpen}
                className={`px-6 py-3 h-max  rounded-md text-white font-semibold shadow-md transition duration-300 ${
                  isRegistrationOpen
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isRegistrationOpen ? "Book Now" : "Registration Closed"}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="my-2 text-center text-2xl font-semibold">
            Student Review
          </h2>
          {review ?(
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm">
              <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-900">
                  Projects
                </p>
                <p className="text-sm font-normal text-gray-800">
                  Unlimted projects for you
                </p>
              </div>
            </div>
          ): (
            "No review"
          ) }
        </div>
      </div>
    </>
  );
};

export default SessionDetails;
