import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";
import LoadingSpinner from "../../../Components/LoadingSpinner";

const ViewAllUser = () => {
  const [search, setSearch] = useState("");
  const [userPerPage, setUserPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const axiosSecure = useAxiosSecure();

  const {data:count,isLoading}=useQuery({
    queryKey:['count'],
    queryFn:async()=>{
      const {data}=await axiosSecure.get('/user-count')
      return data
    }
  })
 
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", search,currentPage,userPerPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users?search=${search}&page=${currentPage}&size=${userPerPage}`);
      return data;
    },
  });
  if(isLoading)return <LoadingSpinner/>
  const userCount =count.count;

  const numberOfPages = Math.ceil(userCount / userPerPage);

  const pages = [...Array(numberOfPages).keys()];


  const handleUpdateRole = async (id) => {
    const role = "admin";
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(`/user/${id}`, { role });
          Swal.fire({
            title: "Updated!",
            text: "User role update Successfully",
            icon: "success",
          });
          refetch();
        } catch (err) {
          toast.error(err.message);
        }
      }
    });
  };

  const handleUserPerPage = (e) => {
    const value = parseInt(e.target.value);
    setUserPerPage(value);
    setCurrentPage(0)
  };
  return (
    <div className="p-8">
      <div className="flex justify-center items-center">
        <div className="flex flex-col mb-5">
          <h1 className="text-2xl md:text-4xl font-bold pb-3 text-[#58a6af] border-b-2 inline text-center my-5">
            All USERS
          </h1>

          <input
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered input-md w-full max-w-xs"
            type="text"
            name="search"
            placeholder={`🔍 Search by email`}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white  rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#58a6af] text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Profile</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-center">Role</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{index + 1}</td>
                <td className="py-3 px-6 text-left">
                  <img
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                    alt={user.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td className="py-3 px-6 text-left">{user.name}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`py-1 px-3 rounded-full text-xs capitalize ${
                      user.role === "admin"
                        ? "bg-red-100 text-red-500"
                        : user.role === "tutor"
                        ? "bg-blue-100 text-blue-500"
                        : "bg-green-100 text-green-500"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleUpdateRole(user?._id)}
                    className="bg-blue-400 text-white px-3 py-1 rounded-md font-bold hover:bg-blue-600 transition"
                  >
                    update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* pagination */}
        <div className="flex  justify-center items-center mt-5">
          
          <div className="join">
            {pages.map((page) => (
              <button
                className={`${
                  currentPage == page && "border bg-teal-500 text-white"
                } btn mr-1`}
                onClick={() => setCurrentPage(page)}
                key={page}
              >
                {page}
              </button>
            ))}
            
          </div>
          <select
            defaultValue={userPerPage}
            onChange={handleUserPerPage}
            className="select bg-gray-400"
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ViewAllUser;
