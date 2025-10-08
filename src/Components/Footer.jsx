import React from "react";
import logo from "../assets/logo.png";
import social from "../assets/social.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black px-4 sm:px-6 md:px-10 lg:px-20 py-8 interFont flex flex-col justify-center">
        {/* top part */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0 mt-3">
          {/* logo */}
          <div className="flex items-center gap-1">
            <img
              src={logo}
              alt="App Arena Logo"
              className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]"
            />
            <h1 className="font-bold text-base text-white">APP ARENA</h1>
          </div>

          {/* social link part */}
          <div className="text-center sm:text-right space-y-2.5">
            <div className="text-white font-medium text-xl">
              <h1 className="text-white font-medium text-lg sm:text-xl">
                Social Links
              </h1>
            </div>

            <div className="flex justify-center sm:justify-end">
              <img
                src={social}
                alt="Social Links"
                className="w-[120px] sm:w-[150px]"
              />
            </div>
          </div>
        </div>

        {/* bottom part */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <h1 className="text-[#FAFAFA] text-xs sm:text-sm">
            Copyright © 2025 - All right reserved
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
