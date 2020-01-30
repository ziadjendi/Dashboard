import React from "react";
const RainBow = () => {
  return (
    <div
      style={{
        height: 5,
        // Another solution
        // background:
        // "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)"
        backgroundImage: `url("strap_color.svg")`,
        backgroundSize: "100% 100%"
      }}
    ></div>
  );
};

export default RainBow;
