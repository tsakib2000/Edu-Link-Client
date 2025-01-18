import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import StudySessionHome from './StudySessionHome';
import TutorSection from './TutorSection';
const Home = () => {
    return (<>
    <Helmet>
        <title>Home</title>
    </Helmet>
        <div>
          <Banner/>
          <StudySessionHome/>
          <TutorSection/>
        </div>
        </>
    );
};

export default Home;