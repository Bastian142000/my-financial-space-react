import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_id: null,
  accessToken: null,
  isAuthenticated: false,
  username: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: {
      prepare(user_id, accessToken, username) {
        return { payload: { user_id, accessToken, username } };
      },
      reducer: (state, action) => {
        state.user_id = action.payload.user_id;
        state.isAuthenticated = true;
        state.accessToken = action.payload.accessToken;
        state.username = action.payload.username;
      },
    },
    setLogout: (state) => {
      state.user_id = null;
      state.isAuthenticated = false;
      state.accessToken = null;
      state.username = "";
    },
  },
});

export const { setLogin, setLogout } = AuthSlice.actions;
export default AuthSlice.reducer;
