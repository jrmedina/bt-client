import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <p>
        Error!<br></br>Something went wrong, let's go back and try again...
      </p>
      <Link to={"/"}>
        <button>GO BACK</button>
      </Link>
    </div>
  );
};

export default Error;
