import React from "react";
import { Link } from "react-router-dom";

const Pottery = ({ ptry }) => {
  const { id, p_img, item_name, price, rating, description, status } = ptry;
  console.log(ptry);
  return (
    <div className="card bg-base-100 w-96 shadow-xl h-[600px]">
      <figure className="px-10 pt-10 mt-2 rounded-lg">
        <img src={p_img} alt="Ceramics" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item_name}</h2>
        {description.length > 100 ? (
          <p>
            {description.slice(0, 100)}
            <Link
              className="text-blue-600 font-bold ml-2"
              to={`/pottery/${id}`}
            >
              Read More...
            </Link>
          </p>
        ) : (
          <p>{description}</p>
        )}

        <div className="card-actions">
          <Link to={`/pottery/${id}`}>
            <button className="btn btn-info text-white font-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pottery;
