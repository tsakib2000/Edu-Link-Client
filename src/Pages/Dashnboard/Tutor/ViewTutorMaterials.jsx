import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import MaterialCard from "../../../Components/Dashboard/Tutor/MaterialCard";
import MaterialUpdateModal from "../../../Components/Dashboard/Tutor/MaterialUpdateModal";
import { useState } from "react";
import Swal from "sweetalert2";

const ViewTutorMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const [materialId,setMaterialId]=useState(null)
  const { user } = useAuth();
  const { data: materials = [] ,refetch} = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/materials/${user?.email}`);
      return data;
    },
  });
  const handleUpdate=(id)=>{
    setMaterialId(id);
    document.getElementById('Material_Update').showModal()
  }
  const handleDelete= async id=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      background:'#58a6af',
      customClass:{
        text:'text-white',
        title:'text-white font-bold'
      },
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async(result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/material/${id}`)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Material Deleted successfully",
            background:'#58a6af',
            customClass:{
              text:'text-white',
              title:'text-white font-bold'
            },
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
         }catch(err){
             Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text:` ${err.message}!`,
                    showConfirmButton: false,
                    background:'#58a6af',
                    customClass:{
                      text:'text-white font-bold',
                      title:'text-white font-bold'
                    },
                    timer: 1500
                  });
         }
      }
    });
  }

  const {data:material={}}=useQuery({
    queryKey:['material',materialId],
    enabled:!!materialId,
    queryFn:async()=>{
      const {data}=await axiosSecure.get(`/material/${materialId}`)
      return data
    }
  })
  return (
    <>
    <div className="p-8">
      <h1 className="uppercase text-center font-bold text-3xl">
        all study materials
      </h1>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {
            materials?.map(material=><MaterialCard handleDelete={handleDelete} handleUpdate={handleUpdate} material={material} key={material._id}/>)
        }
      </div>
      
    </div>
    <MaterialUpdateModal refetch={refetch} material={material}/>
    </>
  );
};

export default ViewTutorMaterials;
