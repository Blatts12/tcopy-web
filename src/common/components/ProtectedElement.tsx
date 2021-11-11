import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAppSelector } from "../hooks/storeHooks";

interface Props {
  children: React.ReactNode;
}

const ProtectedElement: React.FC<Props> = ({ children }) => {
  const authenticated = useAppSelector((state) => state.auth.authenticated);
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/user_panel/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedElement;
