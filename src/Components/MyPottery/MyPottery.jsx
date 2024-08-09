import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Pottery from "../Pottery/Pottery";

const MyPottery = () => {
  const loadedMyPotteryCeramics = useLoaderData();
  const [myPotteryCeramics, setMyPotteryCeramics] = useState(
    loadedMyPotteryCeramics
  );
  console.log(myPotteryCeramics);
  return (
    <div className="py-5">
      <h2 className="text-2xl text-center">
        My pottery & Ceramics:Admin Page-
        <span className="bg-orange-500 p-2 font-bold text-white rounded">
          READ,UPDATE,DELETE
        </span>
        -{myPotteryCeramics.length}
      </h2>
      <div className="grid grid-cols-3 gap-2 m-4  items-center justify-center w-[100%] p-4">
        {myPotteryCeramics.map((p) => (
          <Pottery
            key={p._id}
            ptry={p}
            myPotteryCeramics={myPotteryCeramics}
            setMyPotteryCeramics={setMyPotteryCeramics}
          ></Pottery>
        ))}
      </div>
    </div>
  );
};

export default MyPottery;
