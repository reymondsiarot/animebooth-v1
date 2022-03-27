import axios from "axios";
import Vue from "vue";

const authApi = axios.create({
  baseURL: process.env.VUE_APP_AUTH_API,
  withCredentials: true,
});

authApi.interceptors.request.use(
  function (config) {
    if (Vue.$cookies.isKey("XSRF-TOKEN")) {
      console.log("HAS HEADER");
      config.headers["X-XSRF-TOKEN"] = Vue.$cookies.get("XSRF-TOKEN");
      config.headers.common["X-XSRF-TOKEN"] = Vue.$cookies.get("XSRF-TOKEN");
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  function (response) {
    console.log(response.headers["x-user"]);
    if (response.headers["x-user"]) {
      Vue.$cookies.set("_user", response.headers["x-user"]);
    }

    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default authApi;
