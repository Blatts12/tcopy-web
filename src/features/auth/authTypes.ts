import { User } from "../user/userTypes";

export type AuthState = {
  token: string | null;
  authenticated: boolean;
  loading: boolean;
  user: User;
};

export type RegisterAuthErrors = {
  email?: [string];
  user_tag?: [string];
  display_name?: [string];
  password?: [string];
  non_field_errors?: [string];
};
