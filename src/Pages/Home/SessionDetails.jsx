import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { isAfter, isBefore, parseISO } from "date-fns";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
const SessionDetails = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: session = {} } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/session/${id}`);
      return data;
    },
  });
    const { data: users} = useQuery({
      queryKey: ["users", user?.email],
      enabled: !!user?.email,
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/users/role/${user?.email}`);
        return data;
      },
      retry: false,
    });

  const {
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
  const { _id, ...newSession } = session;
  newSession.sessionId = _id;
  newSession.studentEmail = user?.email;
  const currentDate = new Date();
  const startDate = registrationStart ? parseISO(registrationStart) : null;
  const endDate = registrationEnd ? parseISO(registrationEnd) : null;
  const isRegistrationOpen =
    isAfter(currentDate, startDate) && isBefore(currentDate, endDate);

  const handleBookNow = async () => {
    if(users.role =='tutor' || users.role == 'admin') return toast.error('session booking not permitted')
     if (fee <= 0) {
      try {
        await axiosSecure.post("/bookSession", newSession);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Session Booked successfully",
          showConfirmButton: false,
          background: "#58a6af",
          customClass: {
            text: "text-white",
            title: "text-white font-bold",
          },
          timer: 1500,
        });
        navigate("/dashboard");
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      navigate(`/checkout/${_id}`);
    }
  };

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", _id],
    enabled: !!_id,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/reviews/${_id}`);
      return data;
    },
  });
 
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

     {
      reviews.length <=0 ?'No reviews'   :  <div className="grid md:grid-cols-2 gap-4">
      {reviews &&
        reviews?.map((review) => (
          <div key={review._id} className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm">
            <div>
              <p className="mb-2 text-sm font-medium text-gray-900 uppercase">
                {review.studentName}
              </p>
              <p className="text-sm font-normal text-gray-800">
              {/*TODO: set rating as stars */}
              <span className="font-bold">Rating:</span>  {review.rating}
              </p>
              <p className="text-sm font-normal text-gray-800">
              <span className="font-bold">Review:</span>  {review.review}
              </p>
            </div>
          </div>
        ))}
    </div>
     }
        </div>
      </div>
    </>
  );
};

export default SessionDetails;
