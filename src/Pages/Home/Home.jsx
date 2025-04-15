import { Helmet } from 'react-helmet-async';

import StudySessionHome from './StudySessionHome';
import TutorSection from './TutorSection';
import Testimonial from '../../Components/Home/Testimonial';
import HowItWorks from '../../Components/Home/HowItWorks';
import UpComing from '../../Components/Home/UpComing';
import Faq from '../../Components/Home/Faq';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (<>
    <Helmet>
        <title>Home</title>
    </Helmet>
        <div>
         
          <StudySessionHome/>
          <TutorSection/>
<Testimonial/>
<HowItWorks/>
<UpComing/>
<Faq/>

<NewsLetter/>
        </div>
        </>
    );
};

export default Home;