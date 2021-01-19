import axios from "axios";
import data from "../../yelpAuth";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: data.auth,
  },
});
