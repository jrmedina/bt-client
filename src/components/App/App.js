import React from "react";
import { Route, Switch } from "react-router-dom";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ForecastContainer from "../ForecastContainer/ForecastContainer";
import Dropdown from "../Dropdown/Dropdown";
import Error from "../../assets/Error/Error";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      <h1 className="title">BlueTread Weather App</h1>

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
        <Route path="*" render={() => <Error />} />
      </Switch>
    </main>
  );
};

export default App;
