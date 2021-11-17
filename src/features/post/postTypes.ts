import { User } from "../user/userTypes";
import { EntityId } from "@reduxjs/toolkit";

export type PostDto = {
  id: EntityId;
  author: User;
  content: string;
  pub_date: string;
};

export type Post = {
  id: EntityId;
  author: EntityId;
  content: string;
  pub_date: string;
};

export type CreatePostAction = {
  content: string;
  author: User;
};

export type CreatePostResponse = PostDto;

export type FetchPostAction = {
  id: EntityId;
};

export type FetchPostResponse = PostDto;

export type DeletePostAction = {
  post: Post;
};

export type DeletePostResponse = Post;
