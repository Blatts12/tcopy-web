import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import getRejectValueFromError from "../getRejectValueFromError";
import {
  LoadUserResponse,
  LoginUserAction,
  LoginUserResponse,
  RegisterUserAction,
  RegisterUserResponse,
} from "./authTypes";
import tokenConfig from "./token/tokenConfig";

const apiUrl = import.meta.env.VITE_API_URL;

const loadUserUrl = `${apiUrl}/api/auth/user`;
const loginUrl = `${apiUrl}/api/auth/login`;
const registerUrl = `${apiUrl}/api/auth/register`;
const logoutUrl = `${apiUrl}/api/auth/logout`;

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(loadUserUrl, {
        headers: tokenConfig(getState),
      });

      return response.data as LoadUserResponse;
    } catch (err) {
      return rejectWithValue(getRejectValueFromError(err as AxiosError));
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: LoginUserAction, { rejectWithValue }) => {
    try {
      const response = await axios.post(loginUrl, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data as LoginUserResponse;
    } catch (err) {
      return rejectWithValue(getRejectValueFromError(err as AxiosError));
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (registerCredentials: RegisterUserAction, { rejectWithValue }) => {
    if (registerCredentials.password !== registerCredentials.password_confirm)
      return rejectWithValue({ password_confirm: ["Passwords don't match"] });

    try {
      const response = await axios.post(registerUrl, registerCredentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data as RegisterUserResponse;
    } catch (err) {
      return rejectWithValue(getRejectValueFromError(err as AxiosError));
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      await axios.post(
        logoutUrl,
        {},
        {
          headers: tokenConfig(getState),
        }
      );
    } catch (err) {
      return rejectWithValue(getRejectValueFromError(err as AxiosError));
    }
  }
);
