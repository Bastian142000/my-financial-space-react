import axios from "axios";
import { store } from "../store";
import { refreshToken } from "./auth";
import { setLogin, setLogout } from "../features/auth/components/AuthSlice";

const api = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// ---- REFRESH CONTROL ----
let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (newToken) => {
  refreshSubscribers.forEach((cb) => cb(newToken));
  refreshSubscribers = [];
};

// ---- REQUEST ----
api.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// ---- RESPONSE ----
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const { status, data } = await refreshToken();

          if (status === 200) {
            store.dispatch(
              setLogin(data.user_id, data.accessToken, data.username),
            );
            onRefreshed(data.accessToken);
          } else {
            store.dispatch(setLogout());
            window.location.href = "/";
          }

          isRefreshing = false;
        } catch (refreshError) {
          isRefreshing = false;
          store.dispatch(setLogout());
          window.location.href = "/";
          return Promise.reject(refreshError);
        }
      }

      // Espera a que termine el refresh
      return new Promise((resolve) => {
        subscribeTokenRefresh((newToken) => {
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          resolve(api(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const httpStatus = error.response?.status;
    const message = error.response?.data?.message || error.message;
    console.log(error.response);

    switch (httpStatus) {
      case 400:
        console.error("❌ [400 Bad Request]:", message);
        break;
      case 401:
        console.error("❌ [401 Unauthorized]:", message);
        break;
      case 403:
        console.error("❌ [403 Forbidden]:", message);
        break;
      case 429:
        console.error("❌ [429 Too many requests]:", message);
        break;
      default:
        console.error("❌ API error:", message);
    }

    return Promise.reject(error);
  },
);

export default api;
