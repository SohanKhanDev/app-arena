import React from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import { Link } from "react-router";

const ApplicationCard = ({ application }) => {
  const { image, title, ratingAvg, downloads, id } = application;

  return (
    <Link
      to={`/application/${id}`}
      className="p-4 sm:p-5 md:p-6 interFont space-y-3 sm:space-y-4  bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center w-full"
    >
      <figure className="w-full flex justify-center">
        <img
          src={image}
          alt=""
          className="rounded-lg w-[80%] sm:w-[70%] md:w-[60%] object-contain"
        />
      </figure>
      <h1 className="font-medium text-xl text-left">{title}</h1>

      <div className="flex justify-between w-full mt-2 gap-2 sm:gap-4 ">
        <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#F1F5E8] rounded-md">
          <img src={download} alt="" className="w-4 h-4" />
          <span className="font-medium text-[#00D390]">{downloads}</span>
        </div>

        <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#FFF0E1] rounded-md ">
          <img src={rating} alt="" className="w-4 h-4" />
          <span className="font-medium text-[#FF8811]">{ratingAvg}</span>
        </div>
      </div>
    </Link>
  );
};

export default ApplicationCard;
