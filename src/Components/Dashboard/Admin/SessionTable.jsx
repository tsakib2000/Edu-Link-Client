/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti";
import { FcApproval } from "react-icons/fc";

const SessionTable = ({session,handleApprove,handleReject}) => {
    const {_id,title,sessionPhoto,status,tutorEmail}=session

    return (
        <>
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
                {status}
                </th>
                <th className="flex *:text-2xl">
                  <button onClick={()=>handleApprove(_id)} className="btn btn-ghost "><FcApproval /></button>
                  <button onClick={()=>handleReject(_id)} className="btn btn-ghost text-red-600"><TiDeleteOutline /></button>
                </th>
              </tr>

              </>
    );
};

export default SessionTable;