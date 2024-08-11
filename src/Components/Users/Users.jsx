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
      <h2 className="text-center text-3xl font-bold">
        All Registered Users : {users.length}
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
