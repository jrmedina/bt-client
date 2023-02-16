import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getForecast } from "../../utils/apiCalls";
import ForecastCard from "../ForecastCard/ForecastCard";
import "./ForecastContainer.css";

const ForecastContainer = () => {
  const { location } = useParams();
  const [forecast, setForecast] = useState();
  useEffect(() => {
    getForecast(location).then((data) =>
      setForecast(data.forecast.forecastday)
    );
  }, []);

  if (!forecast) return "Loading";

  const forecastCards = forecast.map((f) => (
    
    <ForecastCard
      date={f.date}
      day={f.day}
      astro={f.astro}
      hour={f.hour}
      key={f.date}
    />
  ));

  return (
    <>
      <Link to={"/"}><button>Go Home</button></Link>
      <h2>14 day forecast for {location}</h2>
      <div className="forecast-container">{forecastCards}</div>
    </>
  );
};

export default ForecastContainer;
