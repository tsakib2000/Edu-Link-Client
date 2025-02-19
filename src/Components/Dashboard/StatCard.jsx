/* eslint-disable react/prop-types */


const StatCard  = ({ title, count, icon }) => {
    return (
        <div className="bg-gray-100 p-5 rounded-lg flex items-center shadow-md">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{count || "N/A"}</p>
    </div>
  </div>
    );
};

export default StatCard ;