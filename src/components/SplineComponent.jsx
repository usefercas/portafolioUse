import React from "react";
import Spline from "@splinetool/react-spline";

const SplineComponent = () => {
  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
      <Spline scene="https://prod.spline.design/mnxYiodWL6Wc4L0p/scene.splinecode" />
    </div>
  );
};

export default SplineComponent;
