import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const BookedDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(id);
  const { data: bookedSession, isLoading } = useQuery({
    queryKey: ["bookedSession", id],
    enabled: !!id,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/bookedSession/details/${id}`);
      return data;
    },
  });


  const [rating, setRating] = useState(1);
  const {
    description,
    classEnd,
    classStart,
    sessionDuration,
    sessionId,
    sessionPhoto,

    title,
    tutorEmail,
    tutorName,
  } = bookedSession || {};
 
  const handleSubmitReview =async (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const reviewInfo={
        review,
        rating,
        sessionId,
        studentName: user?.displayName,
        studentEmail: user?.email,
      }
    try{
        await axiosSecure.post('/reviews',reviewInfo)
     Swal.fire({
            position: "center",
            icon: "success",
            title: "Your review submitted successfully",
            
            background:'#58a6af',
            customClass:{
              text:'text-white',
              title:'text-white font-bold'
            },
            showConfirmButton: false,
            timer: 2000
          });
          e.target.reset()
    }catch(err){
        toast.error(err.message)
    }
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            {title}
          </h1>
          <img
            src={sessionPhoto}
            alt={title}
            className="w-full max-w-2xl mx-auto rounded-lg mt-4"
          />
          <div className="mt-6 space-y-3">
            <p className="text-lg font-semibold text-gray-700">
              <span className="font-medium">Tutor:</span> {tutorName}
            </p>
            <p className="text-lg font-semibold text-gray-700">
              <span className="font-medium">Tutor Email:</span> {tutorEmail}
            </p>
            <p className="text-lg font-semibold text-gray-700">
              <span className="font-medium">Class Duration:</span>{" "}
              {sessionDuration} minutes
            </p>
            <p className="text-lg font-semibold text-gray-700">
              <span className="font-medium">Class Start:</span> {classStart}
            </p>
            <p className="text-lg font-semibold text-gray-700">
              <span className="font-medium">Class End:</span> {classEnd}
            </p>
            <p className="text-lg font-semibold text-gray-700">
              <span className="font-medium">Description:</span> {description}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            Leave a Review
          </h2>
          <form onSubmit={handleSubmitReview} className="space-y-6 mt-4">
            <div>
              <label className="block font-medium">Student Name</label>
              <input
                value={user?.displayName}
                type="text"
                readOnly
                className="w-full px-4 py-2 border bg-gray-100 rounded-md cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block font-medium">Student Email</label>
              <input
                value={user?.email}
                type="email"
                readOnly
                className="w-full px-4 py-2 border bg-gray-100 rounded-md cursor-not-allowed"
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block text-lg font-medium text-gray-700"
              >
                Rating:
              </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="mt-2 block w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="review"
                className="block text-lg font-medium text-gray-700"
              >
                Review:
              </label>
              <textarea
                name="review"
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full "
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md "
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookedDetails;
