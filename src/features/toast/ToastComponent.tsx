import React from "react";
import useTimeout from "../../common/hooks/useTimeout";
import { Toast } from "./toastTypes";

interface Props {
  toast: Toast;
  closeFunction: (toastId: string) => void;
}

const ToastComponent = React.memo(({ toast, closeFunction }: Props) => {
  console.log(toast);

  useTimeout(() => closeFunction(toast.id), toast.timeout);

  return <div>{toast.content}</div>;
});

export default ToastComponent;
