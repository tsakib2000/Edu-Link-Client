/* eslint-disable react/prop-types */


const ApprovedTable = ({session}) => {
    const {title,sessionPhoto,}=session
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
     
                </th>
              </tr>
    );
};

export default ApprovedTable;