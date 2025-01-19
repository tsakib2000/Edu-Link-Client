import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import NoteUpdateModal from "../../../Components/Dashboard/Student/NoteUpdateModal";
import { useState } from "react";

const ManagePersonalNotes = () => {
  const { user } = useAuth();
  const [noteId, setNoteId] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { data: notes = [], refetch } = useQuery({
    queryKey: ["notes", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/note/personal/${user?.email}`);
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
      cancelButtonColor: "#d33",
      background: "#58a6af",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/note/${id}`);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        } catch (err) {
          toast.error(err.message);
        }
      }
    });
  };

  const handleUpdateNote = (id) => {
    setNoteId(id);
    document.getElementById("updateNote").showModal();
  };
  const { data: note = {} } = useQuery({
    queryKey: ["note", noteId],
    enabled: !!noteId,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/singleNote/${noteId}`);
      return data;
    },
  });
  return (
    <div className="p-8">
      <div className="mb-5">
        <h1 className="text-center font-bold text-3xl">
          Manage Your personal Notes
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {notes.map((note) => (
          <div key={note._id} className="card bg-base-100 border rounded-xl">
            <div className="card-body">
              <h2 className="card-title font-bold">{note.noteTitle}</h2>
              <p>{note.description}</p>
              <div className="card-actions justify-between *:text-white">
                <button
                  onClick={() => handleUpdateNote(note._id)}
                  className="btn bg-green-500 btn-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(note._id)}
                  className="btn bg-red-500 btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NoteUpdateModal note={note} refetch={refetch} />
    </div>
  );
};

export default ManagePersonalNotes;
