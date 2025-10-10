import React from "react";
import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <HashLoader />
    </div>
  );
};

export default LoadingSpinner;
