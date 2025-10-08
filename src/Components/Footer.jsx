import React from "react";
import logo from "../assets/logo.png";
import social from "../assets/social.png";

const Footer = () => {
  return (
    <div>
      <div className=" bg-black px-4 sm:px-6 md:px-10 lg:px-20 interFont flex flex-col justify-center ">
        {/* top part */}
        <div className="flex justify-between mt-7">
          {/* logo */}
          <div to={"/"} className="flex items-center gap-1 m">
            <img src={logo} alt="" className="w-[40px] h-[40px]" />
            <h1 className="font-bold text-base text-white">APP ARENA</h1>
          </div>

          {/* social link part */}
          <div className="space-y-2.5">
            <div className="text-white font-medium text-xl">
              <h1>Social Links</h1>
            </div>

            <div>
              <img src={social} alt="" />
            </div>
          </div>
        </div>

        {/* bottom part */}
        <div className="text-center mt-7">
          <h1 className="text-[#FAFAFA] text-xs mb-7">
            Copyright © 2025 - All right reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
