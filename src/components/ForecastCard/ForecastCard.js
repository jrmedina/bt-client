import React from "react";
import "./ForecastCard.css";

const ForecastCard = ({ date, day, astro, hour, location }) => {
  return (
    <div className="forecast-card">
      <h4>
        {new Date(date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
        })}
      </h4>
      <img src={day.condition.icon} alt={day.condition.text} />
      <p>Condition: {day.condition.text}</p>

      <p>High: {day.maxtemp_f}&deg;F</p>
      <p>Average: {day.avgtemp_f}&deg;F</p>
      <p>Low: {day.mintemp_f}&deg;F</p>
    </div>
  );
};

export default ForecastCard;
