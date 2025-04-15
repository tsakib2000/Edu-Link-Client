
import { Link } from "react-router-dom";
import slide1 from "../../assets/slide-1.png";

import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = () => {
  return (
    <div
      className=" items-center h-[500px] mb-5   bg-[#58a6af] "

    >

      <div className=" *:text-white md:grid  md:grid-cols-12 items-center h-full w-11/12 mx-auto">
        <div className="hero-content text-neutral-content  md:col-span-5">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Empowering Collaboration</h1>
            <p className="mb-5">
              Discover the power of teamwork and shared learning. Join us to innovate, inspire, and achieve together in a collaborative environment designed for success.
            </p>
            <Link to='/studySessions' className="btn btn-sm left-0">Enroll Now                            <FaLongArrowAltRight /></Link>
          </div>
        </div>
        <div className=" md:col-span-7">
          <img src={slide1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
