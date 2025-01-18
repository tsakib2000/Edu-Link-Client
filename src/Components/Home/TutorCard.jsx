/* eslint-disable react/prop-types */
const TutorCard = ({tutor}) => {
    const {name,email,photoURL,role}=tutor
  return (
    <div className="flex flex-col border justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
      <img
        src={photoURL}
        alt={name}
        className="w-32 h-32 mx-auto object-cover rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-300">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
          <p className="px-5 text-sm sm:text-base dark:text-gray-600 uppercase">
         {role}
          </p>
          <p className=" text-xs sm:text-base dark:text-gray-600 ">
         {email}
          </p>
        </div>
   
      </div>
    </div>
  );
};

export default TutorCard;
