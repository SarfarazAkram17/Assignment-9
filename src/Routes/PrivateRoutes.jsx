import React, { use } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
