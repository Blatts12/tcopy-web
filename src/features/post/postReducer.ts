import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./postActions";
import { PostState } from "./postTypes";

interface SetNewPostAction {
  type: string;
  payload: {
    content: string;
  };
}

const initialState: PostState = {
  newPost: {
    content: "",
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setNewPost(state, action: SetNewPostAction) {
      state.newPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.newPost = initialState.newPost;
    });
  },
});

export const { setNewPost } = postSlice.actions;
export default postSlice.reducer;
