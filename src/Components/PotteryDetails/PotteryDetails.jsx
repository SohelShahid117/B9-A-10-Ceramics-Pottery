import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PotteryDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch("/pottery.json")
      .then((response) => response.json())
      .then((datum) => {
        const val = datum.find((x) => x.id == id);
        console.log(val);
        setData(val);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const { p_img, item_name, price, rating, description, status } = data;
  console.log(data);

  return (
    <div>
      <div className="m-4 text-center">
        <h2 className="text-5xl">{item_name}</h2>
        <p className="text-2xl mt-2">
          <span className="font-bold">Price:</span>
          {price}
        </p>
      </div>
      <img
        className="w-[90%] h-[800px] rounded-badge my-2 p-5 mx-auto"
        src={p_img}
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
