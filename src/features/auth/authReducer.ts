import { createSlice } from "@reduxjs/toolkit";
import { loadUser, loginUser, logoutUser, registerUser } from "./authActions";
import { AuthState } from "./authTypes";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  authenticated: false,
  ui: {
    loadingLoad: false,
    loadingLogin: false,
    loadingRegister: false,
  },
  user: {
    id: -1,
    email: "",
    date_joined: "",
    user_tag: "",
    display_name: "",
    last_login: "",
    is_staff: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.ui.loadingLogin = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
        state.authenticated = true;
        state.ui.loadingLogin = false;
        state.user = action.payload.user;
      })
      .addCase(loadUser.pending, (state, action) => {
        state.ui.loadingLoad = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.authenticated = true;
        state.ui.loadingLoad = false;
        state.user = action.payload;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.ui.loadingRegister = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
        state.authenticated = true;
        state.ui.loadingRegister = false;
        state.user = action.payload.user;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        localStorage.removeItem("token");
        state.token = null;
        state.authenticated = false;
        state.ui = initialState.ui;
        state.user = initialState.user;
      });
  },
});

export default authSlice.reducer;
