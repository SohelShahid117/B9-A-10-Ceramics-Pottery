import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PotteryDetails = () => {
  const [data, setData] = useState({});
  const { _id } = useParams();
  console.log(_id);

  useEffect(() => {
    // fetch("/pottery.json")
    fetch("http://localhost:3000/myPotteryCeramics")
      .then((response) => response.json())
      .then((datum) => {
        const val = datum.find((x) => x._id == _id);
        console.log(val);
        setData(val);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const { photo, name, price, rating, description, status } = data;
  console.log(data);

  return (
    <div>
      <div className="m-4 text-center">
        <h2 className="text-5xl">{name}</h2>
        <p className="text-2xl mt-2">
          <span className="font-bold">Price:$</span>
          {price}
        </p>
      </div>
      <img
        className="w-[90%] h-[800px] rounded-badge my-2 p-5 mx-auto"
        src={photo}
        alt=""
        srcset=""
      />
      <div className="m-4">
        {/* <h1 className="text-3xl">{item_name}</h1> */}
        <p>{description}</p>
        <p>{description}</p>
        <p>{description}</p>
        <p>{description}</p>
        <p className="text-xl">
          <span className="font-bold">Status:</span>
          {status}
        </p>
        <p className="text-xl">
          <span className="font-bold">Rating:</span> {rating}
        </p>
      </div>
    </div>
  );
};

export default PotteryDetails;
