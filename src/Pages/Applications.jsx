import React from "react";
import useApplications from "../Hooks/useApplications";

const Applications = () => {
  const { applications } = useApplications();

  return (
    <div>
      <h1>All Application</h1>
      <h1>({applications.length}) Apps Found</h1>
    </div>
  );
};

export default Applications;
