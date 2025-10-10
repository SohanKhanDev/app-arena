import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApplications from "../Hooks/useApplications";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppNotFound from "../Components/AppNotFound";

const AppDetails = () => {
  const { id } = useParams();

  // get data
  const { applications, loading } = useApplications();

  // install btn changes
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (!loading && applications.length > 0) {
      const existingList = JSON.parse(localStorage.getItem("installlist"));

      if (existingList) {
        const isAppInstalled = existingList.some((app) => app.id == id);

        if (isAppInstalled) {
          setIsInstalled(true);
        }
      }
    }
  }, [loading, applications, id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const application = applications.find((app) => app.id == id);

  // for invalid link
  if (!application) {
    return <AppNotFound />;
  }

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

  // chart data get
  const data = application.ratings;

  // add to installed list
  const handelAddToInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("installlist"));

    let updatedList = [];

    if (existingList) {
      // duplicate handel
      const isDuplicate = existingList.some((app) => app.id == application.id);
      if (isDuplicate)
        return toast.error("App is already installed!", {
          position: "top-right",
          autoClose: 3000,
        });

      updatedList = [...existingList, application];
    } else {
      updatedList.push(application);
    }
    localStorage.setItem("installlist", JSON.stringify(updatedList));
    setIsInstalled(true);

    toast.success(`${title} installed successfully!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="interFont py-10 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen bg-[#f5f5f5]">
      {/* top section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 border-b border-gray-300 pb-4">
        {/* left img */}
        <div className="">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[250px] sm:max-h-[280px] md:max-h-[300px] lg:h-[300px] object-cover rounded-lg lg:rounded-none"
          />
        </div>

        {/* right info */}
        <div>
          {/* top info */}
          <div className="mb-4 sm:mb-6 lg:mb-[20px] space-y-1.5 border-b border-gray-300 pb-4">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl">
              Developed by{" "}
              <span className="font-semibold text-base sm:text-lg lg:text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>

          {/* bottom info */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-13 mb-6 sm:mb-8 lg:mb-9">
            <div className="text-center sm:text-left">
              <img
                src={download}
                alt="Downloads"
                className="mb-2 mx-auto sm:mx-0 w-8 h-8"
              />
              <p className="text-[#001931] opacity-80 text-sm sm:text-base">
                Downloads
              </p>
              <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl">
                {downloads}
              </h1>
            </div>

            <div className="text-center sm:text-left">
              <img
                src={rating}
                alt="Rating"
                className="mb-2 mx-auto sm:mx-0 w-8 h-8"
              />
              <p className="text-[#001931] opacity-80 text-sm sm:text-base">
                Average Ratings
              </p>
              <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl">
                {ratingAvg}
              </h1>
            </div>

            <div className="text-center sm:text-left">
              <img
                src={review}
                alt="Reviews"
                className="mb-2 mx-auto sm:mx-0 w-8 h-8"
              />
              <p className="text-[#001931] opacity-80 text-sm sm:text-base">
                Total Reviews
              </p>
              <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl">
                {reviews}
              </h1>
            </div>
          </div>

          {/* btn */}
          <div>
            <button
              onClick={handelAddToInstall}
              disabled={isInstalled} // Disable button if installed
              className={`btn px-3.5 py-3 sm:py-4 lg:py-5 rounded-lg text-sm sm:text-base font-semibold transition-colors w-full sm:w-auto ${
                isInstalled
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#00D390] text-white hover:bg-[#00b37a]"
              }`}
            >
              {isInstalled ? `Installed ${size}MB` : `Install Now ${size}MB`}
            </button>
          </div>
        </div>
      </div>

      {/* chart section */}
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px] mt-6 sm:mt-8 lg:mt-10">
        <h1 className="font-semibold text-xl sm:text-2xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10">
          Ratings
        </h1>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* description */}
      <div className="pt-6 sm:pt-8 lg:pt-10">
        <h1 className="font-semibold text-xl sm:text-2xl lg:text-2xl mb-4 sm:mb-6 lg:mb-6">
          Description
        </h1>
        <p className="text-[#627382] text-sm sm:text-base lg:text-base leading-relaxed">
          {description}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
