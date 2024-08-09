import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUser] = useState(loadedUsers);
  console.log(loadedUsers);
  return (
    <div className="py-5 bg-orange-50">
      <h2 className="text-center text-3xl font-bold">
        All Users : {loadedUsers.length}
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
            {users.map((user) => (
              <tr key={user._id} className="text-lg text-center">
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td>
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
