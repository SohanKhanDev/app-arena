import React from "react";
import notFound from "../assets/App-Error.png";
import { Link } from "react-router";

const NoAppInInstall = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 min-h-screen bg-[#f5f5f5] px-4 py-10">
      <img
        src={notFound}
        alt=""
        className="max-w-xs sm:max-w-sm md:max-w-md w-full"
      />
      <div className="text-center">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          OPPS!! NO APP FOUND
        </h1>
        {/* <p className="text-xl text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p> */}

        <div className="flex justify-center py-10">
          <Link
            to="/applications"
            className="btn rounded-b-sm gap-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-3"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoAppInInstall;
