import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const CreateNote = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const handleCreateNote = async (e) => {
    e.preventDefault();
    setLoading(true);
    const noteTitle = e.target.title.value;
    const description = e.target.description.value;
    const studentEmail = user?.email;
    const noteInfo = {
      noteTitle,
      description,
      studentEmail,
    };
    try {
      await axiosSecure.post("/note", noteInfo);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Note Create Successfully",

        background: "#58a6af",
        customClass: {
          text: "text-white",
          title: "text-white font-bold",
        },
        showConfirmButton: false,
        timer: 2000,
      });
      e.target.reset()
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white  rounded-lg">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
        Create a New Note
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Organize your thoughts and ideas by creating a new note.
      </p>
      {/*   
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>} */}

      <form onSubmit={handleCreateNote} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full mt-2 px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter note title"
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Write your note here..."
            rows="6"
            required
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md"
        >
          {loading ? (
            <FaSpinner className="animate-spin text-center" />
          ) : (
            "Create Note"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
