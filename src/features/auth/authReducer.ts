import { createSlice } from "@reduxjs/toolkit";
import { loadUser, loginUser, logoutUser, registerUser } from "./authActions";
import { AuthState } from "./authTypes";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  authenticated: false,
  ui: {
    loadingUser: true,
    loadingLogin: false,
    loadingRegister: false,
  },
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.ui.loadingUser = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.ui.loadingUser = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
        state.authenticated = true;
        state.ui.loadingUser = false;
        state.user = action.payload.user;
      })
      .addCase(loadUser.pending, (state, action) => {
        state.ui.loadingUser = true;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.ui.loadingUser = false;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.authenticated = true;
        state.ui.loadingUser = false;
        state.user = action.payload;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.ui.loadingRegister = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.ui.loadingRegister = false;
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
