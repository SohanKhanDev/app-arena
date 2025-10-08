import React from "react";
import { Link } from "react-router";
import googleplay from "../assets/googleplay.png";
import applestore from "../assets/applestore.png";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="interFont flex flex-col items-center mt-20">
        <h1 className="font-bold text-7xl text-center">
          We Build <br />{" "}
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-xl mt-5 mb-10">
          At App Arena, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* store btn */}
        <div className="flex gap-4 justify-center mb-10">
          <Link
            to={"https://play.google.com/"}
            target="_blank"
            className="btn h-[56px] w-[200px] py-[16px] rounded-b-sm flex items-center gap-2 border-1 border-gray-400 "
          >
            <img src={googleplay} alt="" />
            <h1 className="font-semibold text-xl">Google Play</h1>
          </Link>

          <Link
            to={"https://www.apple.com/app-store/"}
            target="_blank"
            className="btn h-[56px] w-[200px] py-[16px] rounded-b-sm flex items-center gap-2 border border-gray-400 "
          >
            <img src={applestore} alt="" />
            <h1 className="font-semibold text-xl">App Store</h1>
          </Link>
        </div>

        {/* hero img */}
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
