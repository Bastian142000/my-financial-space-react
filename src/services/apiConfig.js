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

api.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.accessToken;
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 ||
      (error.response.status === 403 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;

      try {
        const { status, data } = await refreshToken();

        if (status === 200) {
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          store.dispatch(
            setLogin(data.user_id, data.accessToken, data.username),
          );
        } else {
          store.dispatch(setLogout());
          window.location.href = "/";
        }

        return api(originalRequest);
      } catch (refreshError) {
        store.dispatch(setLogout());
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }
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
