import React, { use } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-48">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
