import React from "react";
import notFound from "../assets/App-Error.png";
import { Link } from "react-router";

const AppNotFound = ({ clearSerach }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 min-h-[900px] bg-[#f5f5f5]">
      <img src={notFound} alt="" />
      <div className="text-center">
        <h1 className="font-semibold text-5xl">OPPS!! NO APP FOUND</h1>
        <p className="text-xl text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>

        <div className="flex justify-center py-10">
          <Link
            to="/applications"
            onClick={clearSerach}
            className="btn rounded-b-sm gap-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-3"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
