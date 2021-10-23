import { User } from "../user/userTypes";

export type AuthState = {
  token: string | null;
  authenticated: boolean;
  loading: boolean;
  user: User;
};
