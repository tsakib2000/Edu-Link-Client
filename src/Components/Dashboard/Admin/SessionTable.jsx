/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti";
import { FcApproval } from "react-icons/fc";
const SessionTable = ({session}) => {
    const {title,sessionPhoto,}=session
    console.log(session);
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
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th className="flex *:text-2xl">
                  <button className="btn btn-ghost "><FcApproval /></button>
                  <button className="btn btn-ghost text-red-600"><TiDeleteOutline /></button>
                </th>
              </tr>
    
    );
};

export default SessionTable;