import React from "react";
import { Link } from "react-router";
import googleplay from "../assets/googleplay.png";
import applestore from "../assets/applestore.png";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <section className="interFont flex flex-col items-center mt-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
          We Build <br />{" "}
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-base sm:text-lg md:text-xl text-center mt-5 mb-10">
          At App Arena, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* store btn */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 w-full max-w-lg">
          <Link
            to={"https://play.google.com/"}
            target="_blank"
            className="btn h-[56px] w-full sm:w-[200px] py-[16px] rounded-b-sm flex items-center gap-2 border border-gray-400 justify-center"
          >
            <img src={googleplay} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
            <h1 className="font-semibold text-base sm:text-xl">Google Play</h1>
          </Link>

          <Link
            to={"https://www.apple.com/app-store/"}
            target="_blank"
            className="btn h-[56px] w-full sm:w-[200px] py-[16px] rounded-b-sm flex items-center gap-2 border border-gray-400 justify-center"
          >
            <img src={applestore} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
            <h1 className="font-semibold text-base sm:text-xl">App Store</h1>
          </Link>
        </div>

        {/* hero img */}
        <div className="w-full flex justify-center">
          <img src={hero} alt="" className="w-full max-w-3xl object-contain" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
