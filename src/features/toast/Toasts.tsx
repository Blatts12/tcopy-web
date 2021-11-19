import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import ToastComponent from "./ToastComponent";
import { deleteToast } from "./toastReducer";

const Toasts: React.FC = () => {
  const dispatch = useAppDispatch();
  const toasts = useAppSelector((state) => state.toast.toasts);

  const closeToast = useCallback(
    (toastId: string) => {
      dispatch(deleteToast({ id: toastId }));
    },
    [dispatch]
  );

  return (
    <div className="toasts toasts--bottom">
      {Object.keys(toasts).map((toastId) => {
        return (
          <ToastComponent
            key={toastId}
            toast={toasts[toastId]}
            closeFunction={closeToast}
          />
        );
      })}
    </div>
  );
};

export default Toasts;