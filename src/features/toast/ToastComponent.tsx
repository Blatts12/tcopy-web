import React, { useCallback, useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import useTimeout from "../../common/hooks/useTimeout";
import { Toast } from "./toastTypes";

interface Props {
  toast: Toast;
  closeFunction: (toastId: string) => void;
}

const ToastComponent = React.memo(({ toast, closeFunction }: Props) => {
  const [delay, setDelay] = useState<number | null>(toast.timeout);
  useTimeout(() => closeFunction(toast.id), delay);

  const closeToast = useCallback(
    (id: string) => {
      setDelay(null);
      closeFunction(id);
    },
    [setDelay, closeFunction]
  );

  return (
    <div className={`toast toast--${toast.type}`}>
      <span>{toast.content}</span>
      {toast.closeable && (
        <span className="toast__close" onClick={() => closeToast(toast.id)}>
          <BsXCircleFill />
        </span>
      )}
    </div>
  );
});

export default ToastComponent;
