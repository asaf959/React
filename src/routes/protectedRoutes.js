import React from "react";
import { Navigate, Outlet } from "react-router";
import { loginRoute } from "./routes";

const useAuth = () => {
  const user = { logginIn: false };
  return user && user.logginIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={loginRoute} />;
};

export default ProtectedRoutes;
