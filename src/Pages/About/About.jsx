import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#58a6af]">About EduLink</h1>
          <p className="text-lg text-gray-600 mt-2">
            Empowering students with knowledge, one session at a time.
          </p>
        </div>
  
        {/* Mission Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#58a6af]">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            EduLink is dedicated to making quality education accessible to everyone. We connect students with expert mentors
            through interactive study sessions, helping them master new skills and achieve their academic goals.
          </p>
        </div>
  
        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 my-10">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-[#58a6af]">📚 Live Study Sessions</h3>
            <p className="text-gray-600 mt-2">Join interactive classes with experienced mentors.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-[#58a6af]">📖 Study Materials</h3>
            <p className="text-gray-600 mt-2">Access notes, presentations, and recorded sessions.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-[#58a6af]">🌎 Global Community</h3>
            <p className="text-gray-600 mt-2">Connect with learners and mentors from around the world.</p>
          </div>
        </div>
  
       
  
        {/* Join Us */}
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-[#58a6af]">Join Us Today!</h2>
          <p className="text-gray-700 mt-2">
            Become a part of our growing community and start learning today.
          </p>
          <Link to='/signup' className="btn mt-4 px-6 py-3 bg-[#58a6af] text-white rounded-lg shadow-md hover:bg-[#4a8f99]">
            Get Started
          </Link>
        </div>
      </div>
    );
};

export default About;