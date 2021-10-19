import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../features/feed/feedReducer";
import postReducer from "../features/post/postReducer";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
