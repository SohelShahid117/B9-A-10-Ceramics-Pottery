import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Pottery = ({ ptry, myPotteryCeramics, setMyPotteryCeramics }) => {
  const { _id, photo, name, price, rating, description, status } = ptry;
  console.log(ptry);
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
        fetch(
          `https://b9-a-10-ceramics-pottery-server-4lx8.vercel.app/myPotteryCeramics/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Pottery-Ceramics has been deleted.",
                icon: "success",
              });
              const remainingPottery = myPotteryCeramics.filter(
                (p) => p._id != _id
              );
              console.log(remainingPottery);
              setMyPotteryCeramics(remainingPottery);
            }
          });
      }
    });
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl h-[600px]">
      <figure className="px-10 pt-10 mt-2 rounded-lg">
        <img src={photo} alt="Ceramics" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        {description.length > 100 ? (
          <p>
            {description.slice(0, 100)}
            <Link
              className="text-blue-600 font-bold ml-2"
              to={`/pottery/${_id}`}
            >
              Read More...
            </Link>
          </p>
        ) : (
          <p>{description}</p>
        )}

        <div className="card-actions">
          <Link to={`/pottery/${_id}`}>
            <button className="btn btn-info text-white font-bold">
              View Details
            </button>
          </Link>
          <Link to={`/updatePotteryCeramics/${_id}`}>
            <button className="btn btn-warning text-white font-bold">
              Edit
            </button>
          </Link>
          <button
            className="btn btn-error text-white font-bold"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pottery;
