import { AuthenticatedUser } from "../user/userTypes";

export type AuthState = {
  token: string | null;
  authenticated: boolean;
  ui: {
    loadingLogin: boolean;
    loadingRegister: boolean;
    loadingLoad: boolean;
  };
  user: AuthenticatedUser;
};

type AuthenticatedUserWithToken = {
  user: AuthenticatedUser;
  token: string;
};

export type LoadUserResponse = AuthenticatedUser;

export type LoginUserAction = {
  email: string;
  password: string;
};

export type LoginUserResponse = AuthenticatedUserWithToken;

export type RegisterUserAction = {
  email: string;
  password: string;
  password_confirm: string;
  user_tag: string;
  display_name: string;
};

export type RegisterUserResponse = AuthenticatedUserWithToken;
