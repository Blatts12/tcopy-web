import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByUserTag } from "./userActions";
import { User } from "./userTypes";

const initialState: { user: User; ui: { loading: boolean } } = {
  user: {
    id: -1,
    date_joined: "",
    last_login: "",
    display_name: "",
    email: "",
    user_tag: "",
    is_staff: false,
  },
  ui: {
    loading: false,
  },
};

const userSlice = createSlice({
  name: "userDisplay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByUserTag.pending, (state, action) => {
        state.ui.loading = true;
      })
      .addCase(fetchUserByUserTag.fulfilled, (state, action) => {
        state.ui.loading = false;
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
