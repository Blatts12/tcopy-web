import { User } from "../user/userTypes";

export type AuthState = {
  token: string | null;
  authenticated: boolean;
  ui: {
    loadingLogin: boolean;
    loadingRegister: boolean;
    loadingLoad: boolean;
  };
  user: User;
};
