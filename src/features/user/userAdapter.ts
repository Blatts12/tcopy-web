import { createEntityAdapter } from "@reduxjs/toolkit";
import { User } from "./userTypes";

export const userAdapter = createEntityAdapter<User>();
