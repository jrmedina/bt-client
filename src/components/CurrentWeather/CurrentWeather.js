import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCurrentWeather } from "../../utils/apiCalls";
import LoadingWheel from "../LoadingWheel/LoadingWheel";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  const location = useLocation();
  const prevLocationRef = useRef();
  const [weatherData, setWeatherData] = useState();
  const [curStatus, setCurStatus] = useState();

  useEffect(() => {
    if (!prevLocationRef.current) {
      getCurrentWeather("denver").then((data) => setWeatherData(data));
      prevLocationRef.current = location;
    } else if (prevLocationRef.current !== location) {
      getCurrentWeather(location.pathname.substring(1)).then((data) =>
        setWeatherData(data)
      );
      prevLocationRef.current = location;
    }
    weatherData?.current.is_day === 1
      ? setCurStatus("day")
      : setCurStatus("night");
  }, [location]);

  if (!weatherData) return <LoadingWheel />;

  return (
    <div className={`current-weather ${curStatus}`}>
      <h2>{`${weatherData.location.name}, ${weatherData.location.region}`}</h2>
      <p> Condition: {weatherData.current.condition.text}</p>
      <img
        src={weatherData.current.condition.icon}
        alt={weatherData.current.condition.text}
      />
      <p>Actual: {weatherData.current.temp_f}&deg;F</p>
      <p>Feels like: {weatherData.current.feelslike_f}&deg;F</p>

      <Link to={`/${weatherData.location.name}/forecast`}>
        <button>See 14 Day Forecast</button>
      </Link>
    </div>
  );
};

export default CurrentWeather;
