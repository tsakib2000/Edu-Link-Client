/* eslint-disable react/prop-types */


const RejectedTable = ({session}) => {
    const {title,sessionPhoto,tutorEmail,status}=session
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
        <td>{tutorEmail}</td>
        <th>
       <span className="bg-red-300 p-1 rounded-lg font-normal">  {status}</span>
        </th>
    
      </tr>
    );
};

export default RejectedTable;