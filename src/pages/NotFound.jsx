import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "60px", color: "red" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
