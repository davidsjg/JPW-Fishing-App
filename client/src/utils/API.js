import axios from "axios";

export default {
  getLakes: function () {
    return axios.get("/api/lakes");
  },

  getWeather: function () {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=39.8917&lon=-105.7631&exclude=minutely,hourly,alerts&appid=9a8ffa538213bc6a16a74f0af587d5fe"
    );
  },
  // getLakeNames: function (name) {
  //   return axios.get("api/lakes/" + name);
  // },
};
