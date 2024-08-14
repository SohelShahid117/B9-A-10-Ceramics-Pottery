import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUser] = useState([]);

  //READ DATA
  useEffect(() => {
    const getAllUser = async () => {
      const responseData = await axios.get("http://localhost:3000/getAllUser");
      console.log(responseData);
      console.log(responseData.data);
      setUser(responseData.data);
    };
    getAllUser();
  }, []);

  console.log(users);

  const handleDelete = (_id) => {
    console.log("delete", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/deleteAUser/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remainingUser = users.filter((u) => u._id != _id);
              console.log(remainingUser);
              setUser(remainingUser);
            }
          });
      }
    });
  };
  return (
    <div className="py-5 bg-orange-50">
      <h2 className="text-center text-3xl font-bold py-5">
        All Registered Users : {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table border-orange-900 p-5">
          {/* head */}
          <thead>
            <tr className="text-xl text-center border-y-2 border-orange-900 border-x-2 text-black">
              <th className="border-x-2 border-red-800">S/N</th>
              <th className="border-x-2 border-red-800">Id</th>
              <th className="border-x-2 border-red-800">Email</th>
              <th className="border-x-2 border-red-800">Username</th>
              <th className="border-x-2 border-red-800">Edit</th>
              <th className="border-x-2 border-red-800">Delete</th>
            </tr>
          </thead>
          <tbody className="border-orange-900">
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="text-lg text-center border-red-800 border-b-2 border-r-2"
              >
                <td className="border-x-2 border-red-800">{index + 1}</td>
                <td className="border-x-2 border-red-800">{user._id}</td>
                <td className="border-x-2 border-red-800">{user.email}</td>
                <td className="border-x-2 border-red-800">{user.username}</td>
                <td className="border-x-2 border-red-800">
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
