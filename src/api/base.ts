import axios from "axios";
import { getFromStorage, deleteFromStorage, saveToStorage } from "../utils";
import { LoginResponse } from "./auth";

const Api = axios.create({
  baseURL: "http://localhost:3000/",
});

Api.interceptors.request.use(
  function (config) {
    const auth = getFromStorage<Partial<LoginResponse>>("auth", {
      user: undefined,
      tokens: undefined,
    });
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
    const auth = getFromStorage<Partial<LoginResponse>>("auth", {
      user: undefined,
      tokens: undefined,
    });
    const originalRequest = error.config;
    if (auth.tokens && error.response.status === 401) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;
      } else {
        deleteFromStorage("auth");
        window.location.href = "/login";
      }
      try {
        const res = await Api.post("/auth/refresh", {
          refreshToken: auth.tokens.refreshToken,
        });

        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;

        saveToStorage("auth", {
          ...auth,
          tokens: { ...auth.tokens, accessToken: res.data.accessToken },
        });
        return Api(originalRequest);
      } catch {
        deleteFromStorage("auth");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);
export default Api;
