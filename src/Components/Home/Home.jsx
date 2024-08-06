import React from "react";
import Slider from "./../Slider/Slider";
import { useLoaderData } from "react-router-dom";
import Pottery from "../Pottery/Pottery";

const Home = () => {
  const pottery = useLoaderData();
  console.log(pottery);
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-3 gap-2 m-4  items-center justify-center w-[100%] p-4">
        {pottery.map((p) => (
          <Pottery key={p.id} ptry={p}></Pottery>
        ))}
      </div>
    </div>
  );
};

export default Home;
