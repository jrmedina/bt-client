const getCurrentWeather = async (location) => {
  
  
  try {
    const response = await fetch(
      `http://localhost:3001/api/weather/${location}`
    );
    const json = await response.json();
  
    return json;
  } catch (error) {
    console.log(error);
  }
};



const getForecast = async (location) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/weather/${location}/forecast`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
export { getCurrentWeather, getForecast};