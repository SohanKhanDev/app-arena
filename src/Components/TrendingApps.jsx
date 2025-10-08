import React from "react";
import { Link } from "react-router";
import ApplicationCard from "./ApplicationCard";
import useApplications from "../Hooks/useApplications";

const TrendingApps = () => {
  // data get
  const { applications, loading, error } = useApplications();

  // Trending Apps
  const trendingApp = applications.slice(0, 8);

  return (
    <div className="bg-[#f5f5f5]">
      {/* top */}
      <div className="text-center pt-10 md:pt-20 space-y-3 md:space-y-4 px-4">
        <h1 className="font-bold text-3xl md:text-5xl">Trending Apps</h1>
        <p className="text-[#627382] text-sm md:text-base max-w-xl mx-auto">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          md:gap-8 
          px-6 
          sm:px-10 
          md:px-16 
          lg:px-20 
          py-8 
          md:py-10
        "
      >
        {trendingApp.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>

      <div className="flex justify-center py-10">
        <Link
          to="/applications"
          className="btn rounded-b-sm gap-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-3"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
