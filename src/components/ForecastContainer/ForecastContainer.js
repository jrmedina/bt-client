import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getWeather } from "../../utils/apiCalls";
import ForecastCard from "../ForecastCard/ForecastCard";
import LoadingWheel from "../../assets/LoadingWheel/LoadingWheel";
import "./ForecastContainer.css";

const ForecastContainer = () => {
  const { location } = useParams();
  const [forecast, setForecast] = useState();

  useEffect(() => {
    getWeather(`${location}/forecast`).then((data) =>
      setForecast(data.forecast.forecastday)
    );
  }, []);

  if (!forecast) return <LoadingWheel />;

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
    <div className="forecast-container">
      <Link to={"/"}>
        <button>Go Home</button>
      </Link>
      <h2>14 day forecast for {location}</h2>
      <div className="forecast-cards">{forecastCards}</div>
    </div>
  );
};

export default ForecastContainer;
