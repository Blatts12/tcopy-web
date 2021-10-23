import { createAsyncThunk } from "@reduxjs/toolkit";
import tokenConfig from "./token/tokenConfig";

const loadUserUrl = "http://127.0.0.1:8000/api/auth/user";
const loginUrl = "http://127.0.0.1:8000/api/auth/login";
const registerUrl = "http://127.0.0.1:8000/api/auth/register";
const logoutUrl = "http://127.0.0.1:8000/api/auth/logout";

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { getState, rejectWithValue }) => {
    const data = await fetch(loadUserUrl, {
      method: "GET",
      headers: tokenConfig(getState),
    }).then((res) => res.json());

    if (!data.id) {
      return rejectWithValue(data);
    }

    return data;
  }
);

interface Credentials {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, { rejectWithValue }) => {
    const data = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());

    if (!data.user || !data.token) {
      return rejectWithValue(data);
    }

    return data;
  }
);

interface RegisterCredentials {
  email: string;
  password: string;
  user_tag: string;
  display_name: string;
}

export const register = createAsyncThunk(
  "auth/register",
  async (registerCredentials: RegisterCredentials, { rejectWithValue }) => {
    const data = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerCredentials),
    }).then((res) => res.json());

    if (!data.user || !data.token) {
      return rejectWithValue(data);
    }

    return data;
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { getState }) => {
    await fetch(logoutUrl, {
      method: "POST",
      headers: tokenConfig(getState),
    });
  }
);
