import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authReducer";
import feedReducer from "../features/feed/feedReducer";
import postReducer from "../features/post/postReducer";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    post: postReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
