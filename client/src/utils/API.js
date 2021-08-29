import axios from "axios";

export default {
  getLakes: function () {
    return axios.get("/api/lakes");
  },
  // getLakeNames: function (name) {
  //   return axios.get("api/lakes/" + name);
  // },
};
