import Lottie from 'lottie-react';
import error from '../assets/404.json'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <Lottie animationData={error}></Lottie>
            <Link to='/' className='btn btn-ghost text-[#58a6af] underline'>Back to Home</Link>
        </div>
    );
};

export default Error;