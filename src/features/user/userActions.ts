import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import getRejectValueFromError from "../getRejectValueFromError";
import {
  FetchUserByUserTagAction,
  FetchUserByUserTagResponse,
} from "./userTypes";

const apiUrl = import.meta.env.VITE_API_URL;

const fetchUserByUserTagUrl = `${apiUrl}/api/users/user_tag/`;

export const fetchUserByUserTag = createAsyncThunk(
  "user/fetch",
  async ({ user_tag }: FetchUserByUserTagAction, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${fetchUserByUserTagUrl}${user_tag}`);
      return response.data as FetchUserByUserTagResponse;
    } catch (err) {
      return rejectWithValue(getRejectValueFromError(err as AxiosError));
    }
  }
);
