import axios from "axios";

//jikan API
const config = {
  baseURL: process.env.VUE_APP_JIKAN_API,
};

const jikanApi = axios.create(config);

jikanApi.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default jikanApi;
