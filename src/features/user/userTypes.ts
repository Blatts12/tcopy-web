import { EntityId } from "@reduxjs/toolkit";

export type AuthenticatedUser = {
  id: EntityId;
  email: string;
  user_tag: string;
  display_name: string;
  is_staff: boolean;
  last_login: string | null;
  date_joined: string;
};

export type User = {
  id: EntityId;
  user_tag: string;
  display_name: string;
  is_staff: boolean;
  last_login: string | null;
  date_joined: string;
};

export type UserState = {
  user: User;
  ui: {
    loading: boolean;
  };
};

export type FetchUserByUserTagAction = {
  user_tag: string;
};

export type FetchUserByUserTagResponse = User;
