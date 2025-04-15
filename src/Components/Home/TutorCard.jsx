/* eslint-disable react/prop-types */
const TutorCard = ({ tutor }) => {
  const { name,photoURL, role } = tutor
  return (
    <div
      style={{
        backgroundImage: `url(${photoURL})`,
      }}
      className="h-[300px] border-4  border-teal-500 bg-cover bg-center bg-no-repeat flex justify-start items-end  p-4  rounded-xl sm:px-12 ">
      <div className="bg-white px-2 rounded-sm">
        <h1 className="font-bold">{name}</h1>
        <p className="text-sm font-semibold uppercase">{role}</p>
      </div>
    </div>
  );
};

export default TutorCard;
