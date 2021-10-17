import { createEntityAdapter } from "@reduxjs/toolkit";
import { Post } from "./postTypes";

export const postAdapter = createEntityAdapter<Post>();
