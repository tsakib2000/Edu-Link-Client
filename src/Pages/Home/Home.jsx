import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
const Home = () => {
    return (<>
    <Helmet>
        <title>Home</title>
    </Helmet>
        <div>
          <Banner/>
        </div>
        </>
    );
};

export default Home;