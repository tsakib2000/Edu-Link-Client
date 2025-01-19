import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



import LoadingSpinner from "../../../Components/LoadingSpinner";
import StudyMaterialCard from "../../../Components/Dashboard/Student/StudyMaterialCard";


const ViewStudyMaterials = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: materials = [], isLoading } = useQuery({
    queryKey: ['materials', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booked-materials/${user.email}`);
      return data;
    },
  });

if(isLoading)return <LoadingSpinner/>



  return (<>
    <div className="p-8">
      <div>
        <h1 className="text-3xl text-center font-bold">All Material</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
 {
    materials.map(material=><StudyMaterialCard material={material} key={material._id}/>)
 }
      </div>
      
    </div>
   
    </>
  );
};

export default ViewStudyMaterials;
