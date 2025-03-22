import React from "react";
import Spline from "@splinetool/react-spline";

const RobotComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[600px] h-[600px] sm:w-[300px] sm:h-[300px] relative">
        <Spline scene="https://prod.spline.design/mnxYiodWL6Wc4L0p/scene.splinecode" />
        <style>
          {`
            canvas {
              width: 100% !important;
              height: 100% !important;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default RobotComponent;
