import { createAsyncThunk, EntityId } from "@reduxjs/toolkit";
import { User, UserDto } from "./userTypes";

const apiUrl = import.meta.env.VITE_API_URL;

const fetchUserUrl = `${apiUrl}/api/users/user_tag/`;

console.log(fetchUserUrl);

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
