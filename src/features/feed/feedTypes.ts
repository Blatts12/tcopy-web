import { EntityState } from "@reduxjs/toolkit";
import { Post, PostDto } from "../post/postTypes";
import { User } from "../user/userTypes";
export type FeedType = "global" | "user" | "followed";

export type FeedState = {
  next: string | null;
  previous: string | null;
  posts: EntityState<Post>;
  users: EntityState<User>;
  ui: {
    loading: boolean;
  };
};

export type FeedDto = {
  next: string | null;
  previous: string | null;
  results: PostDto[];
};

export type FetchFeedByCursorAction = {
  cursor: string;
  type: FeedType;
};

export type FetchFeedByCursorResponse = FeedDto;
