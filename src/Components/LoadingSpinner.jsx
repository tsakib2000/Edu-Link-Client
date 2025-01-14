import Lottie from "lottie-react";
import loading from '../assets/loading.json'

const LoadingSpinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Lottie animationData={loading}></Lottie>
        </div>
    );
};

export default LoadingSpinner;