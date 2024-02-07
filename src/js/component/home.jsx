import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
  const [activeLight, setActiveLight] = useState(null);

  const handleActiveLight = (light) => {
    setActiveLight(light);
  };
  return (
    <div className='traffic-container'>
      <div className='traffic-light'>
        <div className='pole'></div>
        <div className='base'>
          <div
            className={`red ${
              activeLight === "red" ? "glow" : ""
            }`}
            onClick={() => handleActiveLight("red")}
          ></div>
          <div
            className={`yellow ${
              activeLight === "yellow" ? "glow" : ""
            }`}
            onClick={() => handleActiveLight("yellow")}
          ></div>
          <div
            className={`green ${
              activeLight === "green" ? "glow" : ""
            }`}
            onClick={() => handleActiveLight("green")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
