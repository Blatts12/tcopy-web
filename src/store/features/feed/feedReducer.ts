import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Post, PostDto } from "../post/postTypes";
import { User } from "../user/userTypes";
import { Feed, FeedDto } from "./feedTypes";

const postAdapter = createEntityAdapter<Post>();
const userAdapter = createEntityAdapter<User>();

export const fetchFeedByCursor = createAsyncThunk(
  "feed/fetchByCursor",
  async (cursor: string = "", { dispatch }) => {
    const data: FeedDto = await fetch(
      `http://127.0.0.1:8000/api/posts/?cursor=${cursor}`
    ).then((res) => res.json());

    return data;
  }
);

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
      });
  },
});

export const { emptyFeed } = feedSlice.actions;
export default feedSlice.reducer;
