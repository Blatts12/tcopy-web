import { createAsyncThunk, EntityId } from "@reduxjs/toolkit";
import { User, UserDto } from "./userTypes";

const fetchUserUrl = "http://127.0.0.1:8000/api/users/user_tag/";

export const fetchUserByUserTag = createAsyncThunk(
  "user/fetch",
  async (user_tag: string, { rejectWithValue }) => {
    const userDto: UserDto = await fetch(`${fetchUserUrl}${user_tag}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => {
        return rejectWithValue(err);
      });
    const user: User = { ...userDto, email: "" };

    return user;
  }
);
