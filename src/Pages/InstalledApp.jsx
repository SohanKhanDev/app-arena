import React, { useEffect, useState } from "react";
import InstalledAppCard from "../Components/InstalledAppCard";
import NoAppInInstall from "../Components/NoAppInInstall";
import { toast, ToastContainer } from "react-toastify";

const InstalledApp = () => {
  const [installedApp, setInstalledApp] = useState([]);

  useEffect(() => {
    const installList = JSON.parse(localStorage.getItem("installlist"));

    if (installList) setInstalledApp(installList);
  }, []);

  // sort funcation
  const [sortOrder, setSortOrder] = useState("none");

  const sortedItem = (() => {
    if (sortOrder === "download-asc") {
      return [...installedApp].sort(
        (a, b) => a.downloadsNumber - b.downloadsNumber
      );
    } else if (sortOrder === "download-desc") {
      return [...installedApp].sort(
        (a, b) => b.downloadsNumber - a.downloadsNumber
      );
    } else {
      return installedApp;
    }
  })();

  // remove funtion
  const handelRemoveFromInstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installlist"));

    let updatedList = existingList.filter((app) => app.id != id);

    // for ui update
    setInstalledApp(updatedList);

    localStorage.setItem("installlist", JSON.stringify(updatedList));
    // alert("Uninstall");
    toast.success(`Uninstalled successfully!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  //empty list handel
  if (!installedApp.length) return <NoAppInInstall></NoAppInInstall>;

  return (
    <div className="bg-[#f5f5f5] interFont px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 min-h-screen">
      {/* top */}
      <div className="text-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 space-y-3 sm:space-y-4 px-2 sm:px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl mx-auto">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* sort box */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-center sm:text-left">
          {installedApp.length} Apps Found
        </h1>

        <label className="form-control w-full sm:w-auto max-w-xs">
          <select
            value={sortOrder}
            onChange={(app) => setSortOrder(app.target.value)}
            className="select select-bordered text-sm sm:text-base w-full"
          >
            <option value="none">Sort by Download</option>
            <option value="download-asc">Low to High</option>
            <option value="download-desc">High to Low</option>
          </select>
        </label>
      </div>

      <div className="w-full sm:w-auto"></div>

      {/* application card */}
      <div className="grid grid-cols-1 gap-6 md:gap-8 py-8 md:py-10">
        {sortedItem.map((application) => (
          <InstalledAppCard
            key={application.id}
            application={application}
            handelRemoveFromInstall={handelRemoveFromInstall}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default InstalledApp;
