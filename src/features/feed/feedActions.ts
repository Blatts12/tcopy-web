import { createAsyncThunk } from "@reduxjs/toolkit";
import { FeedDto } from "./feedTypes";

const globalFeedUrl = "http://127.0.0.1:8000/api/feed/global/";

export const fetchFeedByCursor = createAsyncThunk(
  "feed/fetchByCursor",
  async (cursor: string) => {
    const data: FeedDto = await fetch(`${globalFeedUrl}?cursor=${cursor}`).then(
      (res) => res.json()
    );

    return data;
  }
);
