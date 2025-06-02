import { useQuery } from "@tanstack/react-query";
import TutorCard from "../../Components/Home/TutorCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TutorSection = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tutors = [] } = useQuery({
    queryKey: ['tutor'],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/users/tutor')
      return data
    }
  })
  return (

    <div className="w-4/6 mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 mb-5 space-y-4">
      <div className="space-y-4 text-center lg:text-left">
        <h1 className="text-4xl font-bold">Meet Our Expert <br /> Tutors</h1>
        <p className="text-sm font-semibold">
          Our tutors are industry experts with real-world experience, dedicated to
          guiding you through every step of your learning journey.
        </p>
        <button className="btn bg-teal-500 rounded-2xl btn-sm">Find Courses <span className=" rounded-full"><FaArrowAltCircleRight /></span></button>
      </div>
      <div className="grid md:grid-cols-2  gap-4 md:w-10/12 mx-auto">
        {
          tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)
        }
      </div>
    </div>


  );
};

export default TutorSection;
