import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authReducer";
import feedReducer from "../features/feed/feedReducer";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
