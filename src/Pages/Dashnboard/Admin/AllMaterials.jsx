import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllMaterialCard from "../../../Components/Dashboard/Admin/AllMaterialCard";
import Swal from "sweetalert2";
import { useState } from "react";
import LoadingSpinner from "../../../Components/LoadingSpinner";

const AllMaterials = () => {
  const axiosSecure = useAxiosSecure();
    const [userPerPage, setUserPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(0);
    const {data:count,isLoading}=useQuery({
      queryKey:['count'],
      queryFn:async()=>{
        const {data}=await axiosSecure.get('/material-count')
        return data
      }
    })
  const { data: materials = [], refetch } = useQuery({
    queryKey: ["materials",currentPage,userPerPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/materials?page=${currentPage}&size=${userPerPage}`);
      return data;
    },
  });
  if(isLoading)return <LoadingSpinner/>
  const materialCount =count.count;

  const numberOfPages = Math.ceil(materialCount / userPerPage);

  const pages = [...Array(numberOfPages).keys()];
  const handleUserPerPage = (e) => {
    const value = parseInt(e.target.value);
    setUserPerPage(value);
    setCurrentPage(0)
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      background: "#58a6af",
      customClass: {
        text: "text-white",
        title: "text-white font-bold",
      },
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/material/${id}`);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Material Deleted successfully",
            background: "#58a6af",
            customClass: {
              text: "text-white",
              title: "text-white font-bold",
            },
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: ` ${err.message}!`,
            showConfirmButton: false,
            background: "#58a6af",
            customClass: {
              text: "text-white font-bold",
              title: "text-white font-bold",
            },
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold mb-5">Study Materials</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {materials?.map((material) => (
          <AllMaterialCard
            key={material._id}
         
            material={material}
            handleDelete={handleDelete}
          />
        ))}
      </div>
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
            <option value={4}>2</option>
            <option value={8}>4</option>
            <option value={12}>6</option>
          </select>
        </div>
    </div>
  );
};

export default AllMaterials;
