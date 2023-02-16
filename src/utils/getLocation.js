const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        return { lat: latitude, lon: longitude };
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser");
  }
};
export default getLocation;
