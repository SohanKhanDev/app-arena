import React from "react";
import { useParams } from "react-router";
import useApplications from "../Hooks/useApplications";

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
    <div>
      <h1>AppDetails</h1>
    </div>
  );
};

export default AppDetails;
