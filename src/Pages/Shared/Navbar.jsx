import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/icons8-study-48.png";
const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const navbarLink = (
    <>
      <li>
      <NavLink to="/">Home</NavLink>
      </li>
      <li>
      <NavLink to="/dashboard/dashboardHome">Dashboard</NavLink>
      </li>
      <li>
      <NavLink to="/studySessions">All Study Session</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed backdrop-blur-md md:w-11/12 text-white z-10 top-0">
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
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" /> EduLink
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 *:font-bold">{navbarLink}</ul>
      </div>
      <div className="navbar-end gap-4 flex flex-col-reverse md:flex-row">
        {user ? (
          <>
            <button
              onClick={signOutUser}
              className="!font-semibold btn shadow-2xl border-none  !bg-[#f8fbfb]"
            >
              Sign Out
            </button>
            <div className="avatar">
              <div className="ring-[#58a6af] ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                <img referrerPolicy="no-referrer" src={user?.photoURL} />
              </div>
            </div>
          </>
        ) : (
          <>
            <button className=" btn shadow-2xl border-none  !bg-[#f8fbfb]">
              <Link to="signin">Sign in</Link>
            </button>
            <button className="btn  shadow-2xl border-none !bg-[#f8fbfb]">
              <Link to="signup">Sign up</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
