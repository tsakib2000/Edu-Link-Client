import Lottie from 'lottie-react';
import dashboard from '../../assets/Dashboard.json'

const DashboardHome = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Lottie className='h-[600px]' animationData={dashboard}></Lottie>
        </div>
    );
};

export default DashboardHome;