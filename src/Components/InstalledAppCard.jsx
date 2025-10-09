import React from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";

const InstalledAppCard = ({ application, handelRemoveFromInstall }) => {
  const { image, title, ratingAvg, downloads, size, id } = application;

  return (
    <div className="flex bg-white h-auto min-h-[100px] sm:h-[112px] items-center justify-between p-3 sm:p-4 rounded-md shadow-sm">
      <div className="flex items-center space-x-3 sm:space-x-4 w-full">
        <div className="">
          <img src={image} alt="" className="w-[80px] h-[80px] rounded-lg" />
        </div>

        <div>
          <h1 className="font-medium text-xl">{title}</h1>,
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1">
              <img src={download} alt="" className=" w-[16px] h-[16px]" />
              <p className="text-[#00D390]">{downloads}</p>
            </div>

            <div className="flex items-center gap-1">
              <img src={rating} alt="" className=" w-[16px] h-[16px]" />
              <p className="text-[#FF8811]">{ratingAvg}</p>
            </div>

            <div>
              <p className="text-[#627382]">{size} MB</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => handelRemoveFromInstall(id)}
          className="btn bg-[#00D390] text-white px-3.5 py-3 sm:py-4 lg:py-5 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#00b37a] transition-colors w-full sm:w-auto"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
