import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";

const ViewAllUser = () => {
  const [search, setSearch] = useState('');
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users",search],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users?search=${search}`);
      return data;
    },
  });

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
      </div>
    </div>
  );
};

export default ViewAllUser;
