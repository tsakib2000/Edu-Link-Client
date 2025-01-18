import useAuth from "../../../Hooks/useAuth";


const CreateNote = () => {
    const {user}=useAuth();
    return (
        <div className="max-w-3xl mx-auto mt-10 p-8 bg-white  rounded-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create a New Note</h2>
        <p className="text-center text-gray-600 mb-8">
          Organize your thoughts and ideas by creating a new note.
        </p>
{/*   
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>} */}
  
        <form className="space-y-6">
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
    
              placeholder="Enter note title"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
  
          <div>
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
             
           
              placeholder="Write your note here..."
              rows="6"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Create Note
          </button>
        </form>
      </div>
    );
};

export default CreateNote;