import { createAsyncThunk } from "@reduxjs/toolkit";
import { FeedDto, FeedType } from "./feedTypes";

const feedUrls = (type: FeedType): string => {
  switch (type) {
    case FeedType.Global:
      return "http://127.0.0.1:8000/api/feed/global/";
    case FeedType.UserLiked:
      return "http://127.0.0.1:8000/api/feed/global/";
    case FeedType.UserFollowed:
      return "http://127.0.0.1:8000/api/feed/global/";
    default:
      return "http://127.0.0.1:8000/api/feed/global/";
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
