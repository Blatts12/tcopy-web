export type ToastType = "info" | "error" | "warning" | "success";

export type Toast = {
  id: string;
  content: string;
  closeable: boolean;
  timeout: number;
  type: ToastType;
};

export type ToastState = {
  toasts: {
    [key: string]: Toast;
  };
};

export type CreateToastAction = {
  toast: Toast;
};

export type DeleteToastAction = {
  id: string;
};
