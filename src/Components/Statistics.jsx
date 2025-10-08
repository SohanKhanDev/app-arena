import React from "react";

const Statistics = () => {
  return (
    <div className="interFont bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex flex-col items-center py-8 sm:py-20 px-4 sm:px-6 lg:px-20">
      <div className="md:mb-10 text-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
          Trusted by Millions, Built for You
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row md:gap-6 w-full justify-center items-center">
        <div className="text-white text-center px-6 py-4 sm:px-10 sm:py-6">
          <p className="opacity-80 text-sm sm:text-base">Total Downloads</p>
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-[64px]">
            29.6M
          </h1>
          <p className="opacity-80 text-sm sm:text-base">
            21% more than last month
          </p>
        </div>

        <div className="text-white text-center px-6 py-4 sm:px-10 sm:py-6">
          <p className="opacity-80 text-sm sm:text-base">Total Reviews</p>
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-[64px]">
            906K
          </h1>
          <p className="opacity-80 text-sm sm:text-base">
            46% more than last month
          </p>
        </div>

        <div className="text-white text-center px-6 py-4 sm:px-10 sm:py-6">
          <p className="opacity-80 text-sm sm:text-base">Active Apps</p>
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-[64px]">
            132+
          </h1>
          <p className="opacity-80 text-sm sm:text-base">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
