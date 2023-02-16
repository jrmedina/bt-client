import React from "react";

const ForecastCard = ({ date, day, astro, hour }) => {
  return (
    <div>
      <h3>{date}</h3>
      <p>Condition: {day.condition.text}</p>
      <img src={day.condition.icon} alt={day.condition.text} />
      <p>High: {day.maxtemp_f}</p>
      <p>Average: {day.avgtemp_f}</p>
      <p>Low: {day.lowtemp_f}</p>
    </div>
  );
};

export default ForecastCard;
