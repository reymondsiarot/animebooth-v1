import axios from "axios";

const animeApi = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API,
  withCredentials: true,
});

animeApi.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

animeApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default animeApi;
