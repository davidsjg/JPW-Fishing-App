import axios from "axios";

export default {
  getLakes: function () {
    return axios.get("/api/lakes");
  },
};
