import axios from "axios";
import * as Constants from "../Constants";

axios.interceptors.request.use((config) => {
  config.headers["x-hasura-admin-secret"] = "ODI2NTgwNGZkZDQ0YzE1ZjlhMjljOGQ1";

  return config;
})

export default class CommonServices {

  post(reqBody = {}) {
    return axios.post(Constants.GRAPH_API, reqBody);
  }
}