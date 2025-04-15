import { Link } from "react-router-dom";
import bg1 from '../../assets/NewsBg.png'
import bg2 from '../../assets/NewsBg2.png'

const NewsLetter = () => {
    return (
        <div>
            <section className="text-center flex justify-center items-center relative mb-5 bg-[#58a6af] p-4">
                <img className='absolute h-40 top-0 left-0' src={bg1} alt="" />
                <img className='absolute h-40 -bottom-1 right-0' src={bg2} alt="" />
                <div className="z-10">
                    <h2 className="text-3xl font-bold mb-6">🌍 Join the EduLink Community</h2>
                    <p className="max-w-lg mx-auto text-gray-600">
                        Become part of a growing network of learners and professionals.
                    </p>
                    <Link to='/signup' className="btn mt-4 px-6 py-2 border-none bg-blue-500 text-white rounded-lg  hover:bg-blue-600">
                        Join Now
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default NewsLetter;