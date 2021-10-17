import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "../post/postActions";
import { postAdapter } from "../post/postAdapter";
import { Post, PostDto } from "../post/postTypes";
import { userAdapter } from "../user/userAdapter";
import { User } from "../user/userTypes";
import { fetchFeedByCursor } from "./feedActions";
import { Feed } from "./feedTypes";

const initialState: Feed = {
  next: null,
  previous: null,
  posts: postAdapter.getInitialState(),
  users: userAdapter.getInitialState(),
  loading: false,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    emptyFeed(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedByCursor.fulfilled, (state, action) => {
        const users: User[] = [];
        const posts: Post[] = [];

        action.payload.results.forEach((post: PostDto) => {
          users.push(post.author);

          const normalizedPost: Post = { ...post, author: post.author.id };
          posts.push(normalizedPost);
        });

        postAdapter.upsertMany(state.posts, posts);
        userAdapter.upsertMany(state.users, users);
        state.loading = false;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchFeedByCursor.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchFeedByCursor.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(createPost.fulfilled, (state, action) => {
        const author: User = action.payload.author;
        const post: Post = { ...action.payload, author: author.id };

        userAdapter.upsertOne(state.users, author);
        state.posts.ids.unshift(post.id);
        state.posts.entities[post.id] = post;
      })
      .addCase(createPost.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const { emptyFeed } = feedSlice.actions;
export default feedSlice.reducer;
