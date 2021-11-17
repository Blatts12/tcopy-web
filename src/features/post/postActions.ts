import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import tokenConfig from "../auth/token/tokenConfig";
import getRejectValueFromError from "../getRejectValueFromError";
import {
  CreatePostAction,
  CreatePostResponse,
  DeletePostAction,
  DeletePostResponse,
  FetchPostAction,
  FetchPostResponse,
} from "./postTypes";

const apiUrl = import.meta.env.VITE_API_URL;

const postUrl = `${apiUrl}/api/posts/`;

export const createPost = createAsyncThunk(
  "post/create",
  async (
    { content, author }: CreatePostAction,
    { getState, rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        postUrl,
        {
          content,
          author_id: author.id,
        },
        {
          headers: tokenConfig(getState),
        }
      );
      return response.data as CreatePostResponse;
    } catch (err) {
      return rejectWithValue(getRejectValueFromError(err as AxiosError));
    }
  }
);

export const fetchPost = createAsyncThunk(
  "post/fetch",
  async ({ id }: FetchPostAction, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${postUrl}${id}/`);
      return response.data as FetchPostResponse;
    } catch (err) {
      return rejectWithValue(getRejectValueFromError(err as AxiosError));
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/delete",
  async ({ post }: DeletePostAction, { getState, rejectWithValue }) => {
    try {
      await axios.delete(`${postUrl}${post.id}/`, {
        headers: tokenConfig(getState),
      });
      return post as DeletePostResponse;
    } catch (err) {
      return rejectWithValue(getRejectValueFromError(err as AxiosError));
    }
  }
);
