import React from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";

const ApplicationCard = ({ application }) => {
  const { image, title, ratingAvg, downloads } = application;

  return (
    <div className="p-4 interFont space-y-4 bg-white rounded-lg flex flex-col items-center ">
      <figure className="">
        <img src={image} alt="" className="rounded-lg" />
      </figure>
      <h1 className="font-medium text-xl text-left">{title}</h1>

      <div className="flex justify-between w-full mt-2 ">
        <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#F1F5E8] rounded-md">
          <img src={download} alt="" className="w-4 h-4" />
          <span className="font-medium text-[#00D390]">{downloads}</span>
        </div>

        <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#FFF0E1] rounded-md ">
          <img src={rating} alt="" className="w-4 h-4" />
          <span className="font-medium text-[#FF8811]">{ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
