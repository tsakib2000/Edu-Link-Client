import { useQuery } from "@tanstack/react-query";
import TutorCard from "../../Components/Home/TutorCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TutorSection = () => {
    const axiosPublic=useAxiosPublic();
    const {data:tutors=[]}=useQuery({
        queryKey:['tutor'],
        queryFn:async()=>{
            const {data} = await axiosPublic.get('/users/tutor')
            return data
        }
    })
  return (
    <div className="mb-5">
     <div className="text-center  mb-5 space-y-4">
     <h1 className="text-4xl font-bold">Meet Our Expert Tutors</h1>
      <p className="text-sm font-semibold">
        Our tutors are industry experts with real-world experience, dedicated to
        guiding you through every step of your learning journey.
      </p>
     </div>
     <div className="grid md:grid-cols-2  gap-4 md:w-10/12 mx-auto">
            {
                tutors.map(tutor=><TutorCard key={tutor._id} tutor={tutor}/>)
            }
     </div>
    </div>
  );
};

export default TutorSection;
