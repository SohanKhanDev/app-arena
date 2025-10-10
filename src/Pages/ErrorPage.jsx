import React from "react";
import { Link } from "react-router";
import notFound from "../assets/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 min-h-screen bg-[#f5f5f5] py-10 md:py-20 px-4">
        <img
          src={notFound}
          alt=""
          className="max-w-xs sm:max-w-sm md:max-w-md w-full"
        />
        <div className="text-center">
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Oops, page not found!
          </h1>
          <p className="text-lg sm:text-xl text-[#627382] mt-2">
            The page you are looking for is not available.
          </p>

          <div className="flex justify-center py-10">
            <Link
              to="/"
              className="btn rounded-b-sm gap-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-3"
            >
              Go Back!
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
