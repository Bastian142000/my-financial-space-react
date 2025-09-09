import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  isAuthenticated: false,
  username: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: {
      prepare(accessToken, username) {
        return { payload: { accessToken, username } };
      },
      reducer: (state, action) => {
        state.isAuthenticated = true;
        state.accessToken = action.payload.accessToken;
        state.username = action.payload.username;
      },
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.username = "";
    },
  },
});

export const { setLogin, setLogout } = AuthSlice.actions;
export default AuthSlice.reducer;
