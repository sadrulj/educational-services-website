import React from "react";

const NotFound = () => {
  return (
    <div
      class="card text-dark bg-light mb-3 mx-auto mt-5"
      style={{ maxWidth: "54rem", height: "300px" }}
    >
      <div class="card-header">
        <h3>Page Not Found</h3>
      </div>
      <div class="card-body mt-4">
        <h1 class="card-title">Error 404</h1>
        <h4>Opps! PAGE NOT FOUND</h4>
        <p class="card-text">
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken, report a problem.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
