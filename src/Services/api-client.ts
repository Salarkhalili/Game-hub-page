import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "40927276199c40e7ab65ef4410ea192b",
  },
});
