const getWeather = async (location) => {
  try {
    const response = await fetch(
      `http://bt-server-beta.vercel.app/api/weather/${location}`
    );
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
};


export { getWeather };
