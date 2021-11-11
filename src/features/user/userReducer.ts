import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userActions";
import { User } from "./userTypes";

const initialState: { user: User } = {
  user: {
    id: -1,
    date_joined: "",
    last_login: "",
    display_name: "",
    email: "",
    user_tag: "",
    is_staff: false,
  },
};

const userSlice = createSlice({
  name: "userDisplay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = state.user;
    });
  },
});
