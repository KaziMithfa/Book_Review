import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h2>OOps</h2>
      <p>Sorry an unexpected error has occured</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
