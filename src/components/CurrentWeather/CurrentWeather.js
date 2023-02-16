import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCordsWeather, getCurrentWeather } from "../../utils/apiCalls";
import getLocation from "../../utils/getLocation";

const CurrentWeather = () => {
  const location = useLocation();
  const prevLocationRef = useRef();
  const [weatherData, setWeatherData] = useState();

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
  }, [location]);

  if (!weatherData) return "Loading";

  return (
    <div>
      <h2>{`${weatherData.location.name}, ${weatherData.location.region}`}</h2>
      <p> Condition: {weatherData.current.condition.text}</p>
      <img
        src={weatherData.current.condition.icon}
        alt={weatherData.current.condition.text}
      />
      <p>Actual:{weatherData.current.temp_f}</p>
      <p>Feels like:{weatherData.current.feelslike_f}</p>
      <Link to={`/${weatherData.location.name}/forecast`}>
        <button>See 14 Day Forecast</button>
      </Link>
    </div>
  );
};

export default CurrentWeather;
