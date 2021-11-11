import { createAsyncThunk, EntityId } from "@reduxjs/toolkit";
import { User, UserDto } from "./userTypes";

const fetchUserUrl = "http://127.0.0.1:8000/api/";

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (id: EntityId, { rejectWithValue }) => {
    const userDto: UserDto = await fetch(`${fetchUserUrl}${id}/`, {
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
