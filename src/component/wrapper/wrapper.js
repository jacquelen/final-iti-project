import React, { useLayoutEffect, useState } from "react";
import { Dashmain } from "../dashboardmain/dash";
import { Navigition } from "../navigition/navigition";

function Wrapper() {
  const [backgroundImage, setbackgroundIamge] = useState(  localStorage.getItem("img")  );
useLayoutEffect(() => {
  localStorage.setItem("img", backgroundImage);
}, [backgroundImage])
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: backgroundImage,
        backgroundRepeat: "no-repeat",
        background: "linear-gradient(rgba(12,50,60,0.2))",
        backgroundSize: "cover",
      }}
    >
      <Navigition setbackgroundIamge={setbackgroundIamge} />
      <Dashmain />
    </div>
  );
}

export { Wrapper };
