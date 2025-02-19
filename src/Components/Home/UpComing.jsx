import { FaCalendarAlt } from "react-icons/fa";


const UpComing = () => {
    return (
        <section className="text-center mb-5">
        <h2 className="text-3xl font-bold mb-6">📅 Upcoming Study Sessions</h2>
        <div className="grid grid-cols-2 gap-6">
        
            <div  className="p-4 border rounded-lg shadow-lg flex items-center gap-4">
              <FaCalendarAlt className="text-4xl text-yellow-500" />
              <div>
                <p className="font-semibold">Session 1 : Advanced Javascript</p>
                <p className="text-sm text-gray-600">🕒 Starts in 3 Days</p>
              </div>
            </div>
            <div  className="p-4 border rounded-lg shadow-lg flex items-center gap-4">
              <FaCalendarAlt className="text-4xl text-yellow-500" />
              <div>
                <p className="font-semibold">Session 1 : Advanced React</p>
                <p className="text-sm text-gray-600">🕒 Starts in 3 Days</p>
              </div>
            </div>
        
        </div>
      </section>
    );
};

export default UpComing;