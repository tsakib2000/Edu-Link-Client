import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookedSessionCard = ({ bookedSession }) => {
  const { _id, sessionPhoto, title, description } = bookedSession;
  return (
    <div className=" flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={sessionPhoto} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          to={`/dashboard/bookedDetails/${_id}`}
        className="btn btn-sm bg-teal-500 text-white">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookedSessionCard;
