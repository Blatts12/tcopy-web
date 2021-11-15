import { createAsyncThunk } from "@reduxjs/toolkit";
import tokenConfig from "../auth/token/tokenConfig";
import { User } from "../user/userTypes";
import { Post, PostDto } from "./postTypes";

const apiUrl = import.meta.env.VITE_API_URL;

const createPostUrl = `${apiUrl}/api/posts/`;
const deletePostUrl = `${apiUrl}/api/posts/`;

interface CreatePost {
  content: string;
  author: User;
}

export const createPost = createAsyncThunk(
  "post/create",
  async (post: CreatePost, { getState, rejectWithValue }) => {
    const postDto: PostDto = await fetch(createPostUrl, {
      method: "POST",
      headers: tokenConfig(getState),
      body: JSON.stringify({
        content: post.content,
        author_id: post.author.id,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        return rejectWithValue(err);
      });

    return postDto;
  }
);

export const deletePost = createAsyncThunk(
  "post/delete",
  async (post: Post, { getState, rejectWithValue }) => {
    const result = await fetch(deletePostUrl + post.id + "/", {
      method: "DELETE",
      headers: tokenConfig(getState),
    }).then((res) => res);

    if (result.status !== 204) {
      return rejectWithValue("Unexpected error");
    }

    return post;
  }
);
