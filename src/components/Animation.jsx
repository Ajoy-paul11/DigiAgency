import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";

function Animation() {
  return (
    <Lottie animationData={animationData} className="w-[300px] md:w-[400px]" />
  );
}

export default Animation;
