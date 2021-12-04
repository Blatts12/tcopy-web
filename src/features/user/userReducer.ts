import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByUserTag } from "./userActions";
import { UserState } from "./userTypes";

const initialState: UserState = {
  user: null,
  ui: {
    loading: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByUserTag.pending, (state, action) => {
        state.ui.loading = true;
        state.user = null;
      })
      .addCase(fetchUserByUserTag.fulfilled, (state, action) => {
        state.ui.loading = false;
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
