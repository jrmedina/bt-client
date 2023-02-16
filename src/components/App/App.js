import React, { useEffect, useState } from "react";

import { Route, Switch, Link, useParams } from "react-router-dom";

import "./App.css";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ForecastContainer from "../ForecastContainer/ForecastContainer";
import Dropdown from "../Dropdown/Dropdown";

const App = () => {
  return (
    <main className="App">
      <h1>BLUETREAD Weather App</h1>
      <Switch>
        <Route
          path="/:location/forecast"
          render={() => <ForecastContainer />}
        />
        <Route
          exact
          path="/:location"
          render={() => (
            <>
              <Dropdown />
              <CurrentWeather />
            </>
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <>
              <Dropdown />
              <CurrentWeather />
            </>
          )}
        />
        <Route path="*" render={() => <p>ERROR</p>} />
      </Switch>
    </main>
  );
};

export default App;
