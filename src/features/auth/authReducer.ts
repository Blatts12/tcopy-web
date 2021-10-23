import { createSlice } from "@reduxjs/toolkit";
import { loadUser, login, logout, register } from "./authActions";
import { AuthState } from "./authTypes";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  authenticated: false,
  loading: false,
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
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
        state.authenticated = true;
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(logout.fulfilled, (state, action) => {
        localStorage.removeItem("token");
        state.token = null;
        state.authenticated = false;
        state.loading = false;
        state.user = initialState.user;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.authenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
        state.authenticated = true;
        state.loading = false;
        state.user = action.payload.user;
      });
  },
});

export default authSlice.reducer;
