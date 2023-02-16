const getWeather = async (location) => {
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


export { getWeather };
