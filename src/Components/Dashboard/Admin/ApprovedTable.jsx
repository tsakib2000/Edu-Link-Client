/* eslint-disable react/prop-types */


const ApprovedTable = ({session,handleUpdate,handleDelete}) => {
    const {_id,title,sessionPhoto,status}=session
    return (
        <tr className="hover">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask  h-16 w-16">
                        <img
                          src={sessionPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                 {title}
                </td>
                <td className=""><span className="bg-green-300  p-1 rounded-md">{status}</span></td>
            
                <th className="flex flex-col gap-4">
                  <button onClick={()=>handleUpdate(_id)} className="btn btn-sm bg-blue-400 text-white"> update</button>
                  <button onClick={()=>handleDelete(_id)} className="btn btn-sm bg-red-400 text-white"> update</button>
                </th>
              </tr>
    );
};

export default ApprovedTable;