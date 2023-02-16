import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../utils/apiCalls";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    fetchData("reno").then((data) => setWeatherData(data));
  }, []);

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
