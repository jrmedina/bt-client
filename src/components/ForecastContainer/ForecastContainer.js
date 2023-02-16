import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getForecast } from "../../utils/apiCalls";
import ForecastCard from "../ForecastCard/ForecastCard";

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

  return <div>{forecastCards}</div>;
};

export default ForecastContainer;
