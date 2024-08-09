import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateUsers = () => {
  const { _id } = useParams();
  console.log(_id);
  const updatedUser = useLoaderData();
  console.log(updatedUser);
  const [user, setUser] = useState(updatedUser);
  return (
    <div>
      <h2>Update Users Data:</h2>
      <div className="py-5 bg-orange-50">
        <h2 className="text-center text-3xl font-bold">
          Update Registered Users : {}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl text-center">
                <th>Id</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* {user.map((user) => (
                <tr key={user._id} className="text-lg text-center">
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>
                    <NavLink to={`/updateUsers/${user._id}`}>
                      <button className="btn btn-warning">Edit</button>
                    </NavLink>
                  </td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpdateUsers;
