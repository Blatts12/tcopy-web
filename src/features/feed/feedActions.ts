import { createAsyncThunk } from "@reduxjs/toolkit";
import { FeedDto, FeedType } from "./feedTypes";

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

interface FetchFeedAction {
  cursor: string;
  type: FeedType;
}

export const fetchFeedByCursor = createAsyncThunk(
  "feed/fetchByCursor",
  async ({ cursor, type }: FetchFeedAction) => {
    const data: FeedDto = await fetch(
      `${feedUrls(type)}?cursor=${cursor}`
    ).then((res) => res.json());

    return data;
  }
);
