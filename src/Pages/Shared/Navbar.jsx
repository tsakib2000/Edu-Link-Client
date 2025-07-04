import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/icons8-study-48.png";
import { useEffect, useState } from "react";
import { AiOutlineHome ,AiOutlineInfoCircle } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const navbarLink = (
    <>
      <li>
      <NavLink to="/"><AiOutlineHome /> Home</NavLink>
      </li>
      <li>
      <NavLink to="/studySessions"><BiBookAlt/> All Study Session</NavLink>
      </li>
      <li>
      <NavLink to="/about"><AiOutlineInfoCircle/>  About</NavLink>
      </li>
      {
        user && <li>
        <NavLink to="/dashboard/dashboardHome"><MdDashboard className="w-5 h-5" /> Dashboard</NavLink>
        </li>
      }
    </>
  );
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    
    setTheme(theme === 'dark' ? 'light' : 'dark');
   
  };
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className="navbar fixed backdrop-blur-md md:w-11/12   z-10 top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="  *:text-[#58a6af] *:font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navbarLink}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <img src={logo} alt="" /> EduLink
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 *:font-bold">{navbarLink}</ul>
      </div>
      <div className="navbar-end gap-4 flex   md:flex-row">
        {user ? (
          <>
         <div className="flex flex-col-reverse md:flex-row gap-2 justify-center items-center"> 
            <button
              onClick={signOutUser}
              className="!font-semibold btn shadow-2xl border-none btn-sm  !bg-[#f8fbfb]"
            >
              Sign Out
            </button>
            <div className="avatar">
              <div className="ring-[#58a6af] ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                <img referrerPolicy="no-referrer" src={user?.photoURL} />
              </div>
            </div></div>
          </>
        ) : (
          <>
            <button className=" btn shadow-2xl border-none btn-sm  !bg-[#f8fbfb]">
              <Link to="signin">Sign in</Link>
            </button>
         
          </>
        )}
          <input
              onClick={toggleTheme}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
      </div>
    </div>
  );
};

export default Navbar;
