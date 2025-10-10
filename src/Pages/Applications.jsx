import React, { useEffect, useState } from "react";
import useApplications from "../Hooks/useApplications";
import ApplicationCard from "../Components/ApplicationCard";
import { Link } from "react-router";
import AppNotFound from "../Components/AppNotFound";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorPage from "./ErrorPage";

const Applications = () => {
  // get data
  const { applications, loading, error } = useApplications();

  // search funcility
  const [search, setSearch] = useState("");

  const [searchLoading, setSearchLoading] = useState(false);

  const modifySearchData = search.trim().toLocaleLowerCase();

  const searchedData = modifySearchData
    ? applications.filter((application) =>
        application.title.toLocaleLowerCase().includes(modifySearchData)
      )
    : applications;

  // clear searchbox
  const clearSerach = () => {
    setSearch("");
  };

  useEffect(() => {
    if (search.trim().length > 0) {
      setSearchLoading(true);

      const timer = setTimeout(() => {
        setSearchLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setSearchLoading(false);
    }
  }, [search]);

  // loading
  if (loading) {
    return <LoadingSpinner />;
  }

  // error
  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="bg-[#f5f5f5] interFont px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen">
      {/* top */}
      <div className="text-center pt-10 md:pt-20 space-y-3 md:space-y-4 px-2 sm:px-4">
        <h1 className="font-bold text-3xl md:text-5xl">Our All Applications</h1>
        <p className="text-[#627382] text-sm md:text-base max-w-xl mx-auto">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {/* search box */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5 mt-6 sm:mt-10">
        <div>
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-center sm:text-left">
            ({searchedData.length}) Apps Found
          </h1>
        </div>

        <div className="w-full sm:w-auto">
          <label className="input input-bordered flex items-center gap-2 w-full sm:w-[280px] md:w-[320px] rounded-md shadow-sm bg-white">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Application"
            />
          </label>
        </div>
      </div>

      {/* application card */}
      {searchLoading ? (
        <div className="min-h-[100px] flex items-center justify-center py-10">
          <LoadingSpinner />
        </div>
      ) : !searchedData.length ? (
        <div>
          <AppNotFound clearSerach={clearSerach}></AppNotFound>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 py-8 md:py-10">
          {searchedData.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
