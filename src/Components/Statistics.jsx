import React from "react";

const Statistics = () => {
  return (
    <div className="interFont bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex flex-col items-center py-20">
      <div className=" mb-10">
        <h1 className="text-white font-bold text-5xl">
          Trusted by Millions, Built for You
        </h1>
      </div>

      <div className="flex gap-6">
        <div className="text-white text-center px-10">
          <p className="opacity-80">Total Downloads</p>
          <h1 className="font-extrabold text-[64px]">29.6M</h1>
          <p className="opacity-80">21% more than last month</p>
        </div>

        <div className="text-white text-center px-10">
          <p className="opacity-80">Total Reviews</p>
          <h1 className="font-extrabold text-[64px]">906K</h1>
          <p className="opacity-80">46% more than last month</p>
        </div>

        <div className="text-white text-center px-10">
          <p className="opacity-80">Active Apps</p>
          <h1 className="font-extrabold text-[64px]">132+</h1>
          <p className="opacity-80">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
