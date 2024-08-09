import React, { useState } from "react";
import Slider from "./../Slider/Slider";
import { useLoaderData } from "react-router-dom";
import Pottery from "../Pottery/Pottery";

const Home = () => {
  // const pottery = useLoaderData();
  const loadedMyPotteryCeramics = useLoaderData();
  const [myPotteryCeramics, setMyPotteryCeramics] = useState(
    loadedMyPotteryCeramics
  );
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-3 gap-2 m-4  items-center justify-center w-[100%] p-4">
        {myPotteryCeramics.map((p) => (
          // <Pottery key={p._id} ptry={p}></Pottery>
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

export default Home;
