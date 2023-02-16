import React, { useEffect } from "react";
import { fetchData } from "../../utils/apiCalls";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ForecastContainer from "../ForecastContainer/ForecastContainer";

const App = () => {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/" render={() => <CurrentWeather />} />
        <Route
          path="/:location/forecast"
          render={() => <ForecastContainer />}
        />
        <Route path="*" render={() => <p>ERROR</p>} />
      </Switch>
    </main>
  );
};

export default App;
