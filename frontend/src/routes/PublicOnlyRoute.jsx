import React from "react";
import { useAuth } from "../features/auth/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicOnlyRoute = () => {
  const { accessToken, user } = useAuth();
  if (accessToken) {
    if (user?.role === "owner") return <Navigate to="/owner" replace />;
    if (user?.role === "tenant") return <Navigate to="/tenant" replace />;
    if (user?.role === "admin") return <Navigate to="/admin" replace />;
  }
  return <Outlet />;
};

export default PublicOnlyRoute;
