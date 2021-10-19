import { User } from "../user/userTypes";
import { EntityId } from "@reduxjs/toolkit";

export type PostState = {
  newPost: {
    content: string;
  };
};

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
