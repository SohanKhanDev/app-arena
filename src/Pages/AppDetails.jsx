import React from "react";
import { useParams } from "react-router";
import useApplications from "../Hooks/useApplications";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";

const AppDetails = () => {
  // received id from url
  const { id } = useParams();

  // get data
  const { applications, loading, error } = useApplications();

  if (loading) return <p>Loading...</p>;

  // find the application of url ref id
  const application = applications.find((app) => app.id == id);

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
  } = application;

  return (
    <div className="interFont py-20 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen bg-[#f5f5f5]">
      {/* top section */}
      <div className="flex gap-10 border-b border-gray-300 pb-4">
        {/* left img */}
        <div>
          <img src={image} alt="" className="w-full h-[300px]" />
        </div>

        {/* right info */}
        <div>
          {/* top info */}
          <div className="mb-[20px] space-y-1.5 border-b border-gray-300 pb-4">
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="text-xl">
              Developed by{" "}
              <span className="font-semibold text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>

          {/* bottom info */}
          <div className="flex gap-13 mb-9">
            <div>
              <img src={download} alt="" className="mb-2" />
              <p className="text-[#001931] opacity-80">Downloads</p>
              <h1 className="font-extrabold text-4xl">{downloads}</h1>
            </div>

            <div>
              <img src={rating} alt="" className="mb-2" />
              <p className="text-[#001931] opacity-80">Average Ratings</p>
              <h1 className="font-extrabold text-4xl">{ratingAvg}</h1>
            </div>

            <div>
              <img src={download} alt="" className="mb-2" />
              <p className="text-[#001931] opacity-80">Total Reviews</p>
              <h1 className="font-extrabold text-4xl">{reviews}</h1>
            </div>
          </div>

          {/* btn */}
          <div>
            <button className="btn bg-[#00D390] text-white px-3.5 py-5">
              Install Now {size}MB
            </button>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="pt-10">
        <h1 className="font-semibold text-2xl mb-6">Description</h1>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
