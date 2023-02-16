import React from "react";
import loadingImg from "../../assets/loading.svg";
import "./LoadingWheel.css";

const LoadingWheel = () => {
  return (
    <>
      <img src={loadingImg} className="loading" alt="loading" />
    </>
  );
};

export default LoadingWheel;
