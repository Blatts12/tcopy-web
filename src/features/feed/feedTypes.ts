import { EntityState } from "@reduxjs/toolkit";
import { Post, PostDto } from "../post/postTypes";
import { User } from "../user/userTypes";

export type FeedDto = {
  next: string | null;
  previous: string | null;
  results: PostDto[];
};

export type Feed = {
  next: string | null;
  previous: string | null;
  posts: EntityState<Post>;
  users: EntityState<User>;
  loading: boolean;
};

export type FeedType = "global" | "user" | "followed";
