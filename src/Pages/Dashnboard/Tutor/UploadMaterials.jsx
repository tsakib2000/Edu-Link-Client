import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import UploadMaterialCard from "../../../Components/Dashboard/Tutor/UploadMaterialCard";

const UploadMaterials = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: ApprovedSession = [] } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await axiosSecure("/session/approved");
      return data;
    },
  });

  return (
    <>
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Upload Study Materials
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mx-4">
        {
            ApprovedSession.map(session=><UploadMaterialCard session={session} user={user}key={session._id}/>)
        }
      </div>
    </>
  );
};

export default UploadMaterials;
