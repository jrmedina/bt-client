import React, { useEffect } from "react";
import { fetchData } from "../utils/apiCalls";
import "./App.css";

const App = () => {
  useEffect(() => {
    fetchData("reno").then((data) => console.log(data));
  }, []);

  return <main className="App">App</main>;
};

export default App;
