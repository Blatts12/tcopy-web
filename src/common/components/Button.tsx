import React, { useCallback } from "react";

interface Props {
  children: React.ReactNode;
  type: "submit" | "success" | "info" | "error" | "warning" | "menu" | "action";
  length?: "long" | "normal" | "short";
  center?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = React.memo(
  ({
    type,
    length = "normal",
    center = false,
    loading = false,
    onClick,
    className,
    children,
  }: Props) => {
    const getClassNames = useCallback((type, loading, center, length) => {
      return `button button--${type} ${loading ? "button--loading" : ""} ${
        center ? "button--center" : ""
      } button--${length}`;
    }, []);

    return (
      <button
        className={`${getClassNames(
          type,
          loading,
          center,
          length
        )} ${className}`}
        type={type === "submit" ? "submit" : "button"}
        disabled={loading}
        onClick={onClick ? onClick : undefined}
      >
        {children}
      </button>
    );
  }
);

export default Button;
