import api from "./apiConfig";

export const login = async (email, password) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    return { status: res.status, data: res.data, error: null };
  } catch (error) {
    return { status: error.response?.status, data: null, error: error.message };
  }
};

export const logout = async () => {
  try {
    const res = await api.post("/auth/logout");
    return { status: res.status, error: null };
  } catch (error) {
    return { status: error.response?.status, error: error.message };
  }
};

export const register = async (email, username, password) => {
  try {
    const res = await api.post("/auth/register", { email, username, password });
    return { status: res.status, data: res.data, error: null };
  } catch (error) {
    return { status: error.response?.status, data: null, error: error.message };
  }
};

export const refreshToken = async () => {
  try {
    const res = await api.post("/auth/refresh");
    return { status: res.status, data: res.data, error: null };
  } catch (error) {
    return { status: error.response?.status, data: null, error: error.message };
  }
};
