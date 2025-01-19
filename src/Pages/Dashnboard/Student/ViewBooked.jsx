import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner";
import BookedSessionCard from "../../../Components/Dashboard/Student/BookedSessionCard";

const ViewBooked = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: bookedSessions = [], isLoading } = useQuery({
    queryKey: ["bookedSessions", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/bookedSession/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-8">
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-3 ">My Booked session</h1>
        <p className="text-sm">
          Keep track of your booked sessions effortlessly.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bookedSessions?.map((bookedSession) => (
          <BookedSessionCard
            key={bookedSession._id}
            bookedSession={bookedSession}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewBooked;
