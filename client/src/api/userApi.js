import axios from "axios";

const userApi = axios.create({
  baseURL: process.env.VUE_APP_USER_API,
  withCredentials: true,
});

userApi.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default userApi;
