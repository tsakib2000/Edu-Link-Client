import { isAfter, isBefore, parseISO } from "date-fns";

import { Link } from "react-router-dom";

const sessionCardHome = ({ session }) => {
  const { title, description, _id, registrationStart, registrationEnd,fee } =
    session;
  const currentDate = new Date();
  const startDate = parseISO(registrationStart);
  const endDate = parseISO(registrationEnd);
  const isOngoing =
    isAfter(currentDate, startDate) && isBefore(currentDate, endDate);

  return (
    <>
      <div className=" flex flex-col justify-between p-6 bg-gradient-to-r bg-[#58a6af] rounded-lg shadow  ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-white ">{description}</p>
        <p className="mb-3 font-bold  ">$ {fee == 0 ?'Free':fee}</p>

        <div className="flex justify-between items-center">
          <button
     
            className={`px-4 py-2  rounded-lg ${
              isOngoing ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {isOngoing ? "On Going" : "Closed"}
          </button>

          <Link to={`/details/${_id}`}>
            <button  className=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-500  rounded-lg ">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default sessionCardHome;
