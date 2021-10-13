import { EntityId } from "@reduxjs/toolkit";

export type User = {
  id: EntityId;
  username: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
};
