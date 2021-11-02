import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../user/userTypes";
import { PostDto } from "./postTypes";

const createPostUrl = "http://127.0.0.1:8000/api/posts/";

interface CreatePost {
  content: string;
  author: User;
}

export const createPost = createAsyncThunk(
  "post/create",
  async (post: CreatePost) => {
    const postDto: PostDto = await fetch(createPostUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: post.content,
        author_id: post.author.id,
      }),
    }).then((res) => res.json());

    return postDto;
  }
);
