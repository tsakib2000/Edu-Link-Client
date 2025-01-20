import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Dashboard = () => {
  const { user, signOutUser } = useAuth();

  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const { data: users, isLoading } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/role/${user?.email}`);
      return data;
    },
    retry: false,
  });

  if (isLoading || !users?.role) return <LoadingSpinner />;
  const { role, name } = users;

  const handleSignOut = () => {
    signOutUser().then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-64 py-4 flex flex-col justify-between bg-[#58a6af]  min-h-screen  ">
          <div>
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-center text-white font-semibold uppercase">
                {name}
              </h1>
              <button className="btn w-max btn-xs font-bold text-xs text-center text-[#58a6af] uppercase ">
                {role}
              </button>
            </div>
            <div className="divider divider-neutral"></div>

            {role === "student" && (
              <ul className="menu p-8 space-y-4 *:text-white *:font-semibold ">
                <li>
                  <NavLink to="/dashboard/viewBooked">
                    View booked session
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/createNote">Create note</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageNotes">
                    Manage personal notes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/ViewMaterial">
                    View study material
                  </NavLink>
                </li>
              </ul>
            )}
            {role === "tutor" && (
              <ul className="menu p-8 space-y-4 *:text-white *:font-semibold ">
                <li>
                  <NavLink to="/dashboard/createStudySession">
                    Create study session
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/studySession">
                    View all study sessions{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/uploadMaterials">
                    Upload materials
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/ViewMaterials">
                    View all materials
                  </NavLink>
                </li>
              </ul>
            )}
            {role === "admin" && (
              <ul className="menu p-8 space-y-4 *:text-white *:font-semibold ">
                <li>
                  <NavLink to="/dashboard/viewAllUser">View all users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/AllSession">
                    View all study session{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/viewAllMaterials">
                    View all materials
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <div>
            <ul className="menu p-8 space-y-4 *:text-white *:font-semibold ">
              <li>
                <Link to="/" className="text-center">
                  Home
                </Link>
              </li>
              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid-cols-8 w-full bg-[#f8fbfb]">
            
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
