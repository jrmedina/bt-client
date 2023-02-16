import React from "react";
import "./ForecastCard.css";

const ForecastCard = ({ date, day, astro, hour, location }) => {
  return (
    <div className="forecast-card">
      <h4>{date}</h4>
      <p>Condition: {day.condition.text}</p>
      <img src={day.condition.icon} alt={day.condition.text} />
      <p>High: {day.maxtemp_f}</p>
      <p>Average: {day.avgtemp_f}</p>
      <p>Low: {day.mintemp_f}</p>
    </div>
  );
};

export default ForecastCard;
