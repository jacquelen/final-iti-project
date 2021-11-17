import Lottie from "lottie-react";
import React from "react";
import test from "../../images/test.json";
const Test = () => {
  return (
    <div>
      <Lottie animationData={test} />;
    </div>
  );
};

export default Test;
