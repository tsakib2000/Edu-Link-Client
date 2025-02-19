import { FaBookOpen, FaPenNib, FaChalkboardTeacher } from "react-icons/fa";


const HowItWorks = () => {
    // const steps=["Sign Up & Choose Course", "Join Discussions & Learn", "Track Your Progress"]
    return (
        <section className="text-center mb-5">
        <h2 className="text-3xl font-bold mb-6">📖 How It Works</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-md">
            <FaPenNib className="text-4xl mx-auto text-green-500" />
            <p className="mt-3 font-semibold">Sign Up</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <FaBookOpen className="text-4xl mx-auto text-blue-500" />
            <p className="mt-3 font-semibold">Choose a Course</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <FaChalkboardTeacher className="text-4xl mx-auto text-red-500" />
            <p className="mt-3 font-semibold">Join & Learn</p>
          </div>
        </div>
      </section>
    );
};

export default HowItWorks;