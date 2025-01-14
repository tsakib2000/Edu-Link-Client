import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 py-4 flex flex-col justify-between bg-[#58a6af] h-screen  w-full ">
                <ul className="menu p-8 space-y-4 *:text-white *:font-semibold ">
                <li><NavLink to='/dashboard/viewBooked'>View booked session</NavLink></li>
                <li><NavLink to='/dashboard/createNote'>Create note</NavLink></li>
                <li><NavLink to='/dashboard/manageNotes'>Manage personal notes</NavLink></li>
                <li><NavLink to='/dashboard/ViewMaterial'>View study material</NavLink></li>
                </ul>
           
           <div>
            <ul className="menu p-8 space-y-4 *:text-white *:font-semibold ">
                <li ><Link to='/' className="text-center">Home</Link></li>
            </ul>
           </div>
            </div>
            <div className="grid-cols-8 w-full">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;