// PrivateRoute.jsx
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./feature/userSlice";

function PrivateRoutes() {
  const user = useSelector(selectUser);

  return user ? <Outlet /> : <Navigate to="/auth" />;
  // user ? (
  //   <Route {...rest} element={<Element />} />
  // ) : (
  //   <Navigate to="/auth" />
  // );
}

export default PrivateRoutes;
