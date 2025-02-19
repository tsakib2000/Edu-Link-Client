import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import StudySessionHome from './StudySessionHome';
import TutorSection from './TutorSection';
import Testimonial from '../../Components/Home/Testimonial';
import HowItWorks from '../../Components/Home/HowItWorks';
import UpComing from '../../Components/Home/UpComing';
import Faq from '../../Components/Home/Faq';
import { Link } from 'react-router-dom';
const Home = () => {
    return (<>
    <Helmet>
        <title>Home</title>
    </Helmet>
        <div>
          <Banner/>
          <StudySessionHome/>
          <TutorSection/>
<Testimonial/>
<HowItWorks/>
<UpComing/>
<Faq/>
<section className="text-center mb-5">
        <h2 className="text-3xl font-bold mb-6">🌍 Join the EduLink Community</h2>
        <p className="max-w-lg mx-auto text-gray-600">
          Become part of a growing network of learners and professionals.
        </p>
        <Link to='/signup' className="btn mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg  hover:bg-blue-600">
          Join Now
        </Link>
      </section>

        </div>
        </>
    );
};

export default Home;