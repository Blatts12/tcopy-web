import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateToastAction, DeleteToastAction, ToastState } from "./toastTypes";
import { v4 as uuidv4 } from "uuid";

const initialState: ToastState = {
  toasts: {},
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    createToast(state, action: PayloadAction<CreateToastAction>) {
      const { toast } = action.payload;
      toast.id = uuidv4();
      state.toasts[toast.id] = toast;
    },
    deleteToast(state, action: PayloadAction<DeleteToastAction>) {
      const { id } = action.payload;
      delete state.toasts[id];
    },
  },
});

export const { createToast, deleteToast } = toastSlice.actions;
export default toastSlice.reducer;
