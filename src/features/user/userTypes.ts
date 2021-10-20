import { EntityId } from "@reduxjs/toolkit";

export type User = {
  id: EntityId;
  email: string;
  user_tag: string;
  display_name: string;
  is_staff: boolean;
  last_login: string | null;
  date_joined: string;
};
