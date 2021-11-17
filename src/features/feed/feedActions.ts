import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import getRejectValueFromError from "../getRejectValueFromError";
import {
  FeedType,
  FetchFeedByCursorAction,
  FetchFeedByCursorResponse,
} from "./feedTypes";

const apiUrl = import.meta.env.VITE_API_URL;

const feedUrls = (type: FeedType): string => {
  switch (type) {
    case "global":
      return `${apiUrl}/api/feed/global/`;
    case "user":
      return `${apiUrl}/api/feed/global/`;
    case "followed":
      return `${apiUrl}/api/feed/global/`;
    default:
      return `${apiUrl}/api/feed/global/`;
  }
};

export const fetchFeedByCursor = createAsyncThunk(
  "feed/fetchByCursor",
  async ({ cursor, type }: FetchFeedByCursorAction, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${feedUrls(type)}?cursor=${cursor}`);
      return response.data as FetchFeedByCursorResponse;
    } catch (err) {
      return rejectWithValue(getRejectValueFromError(err as AxiosError));
    }
  }
);
