import axios from "axios";
import store from "../store";
import { logout, refreshToken } from "../features/auth/auth.slice";
const Api = axios.create({
  baseURL: "http://localhost:3000/",
});

Api.interceptors.request.use(
  function (config) {
    const auth = store.getState().auth;
    if (auth.tokens) {
      config.headers.Authorization = `Bearer ${auth.tokens.accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const auth = store.getState().auth;
    const originalRequest = error.config;
    if (auth.tokens && error.response.status === 401) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;
      } else {
        store.dispatch(logout());
      }
      try {
        const res = await Api.post("/auth/refresh", {
          refreshToken: auth.tokens.refreshToken,
        });

        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;

        store.dispatch(refreshToken(res.data.accessToken));
        return Api(originalRequest);
      } catch {
        store.dispatch(logout());
      }
    }

    return Promise.reject(error);
  }
);
export default Api;
