import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllMaterialCard from "../../../Components/Dashboard/Admin/AllMaterialCard";
import Swal from "sweetalert2";

const AllMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const { data: materials = [], refetch } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/materials");
      return data;
    },
  });

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
    </div>
  );
};

export default AllMaterials;
