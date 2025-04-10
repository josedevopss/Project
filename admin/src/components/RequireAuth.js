import React from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  // Check if "adminToken=loggedin" is present in document.cookie
  const isLoggedIn = document.cookie.includes("adminToken=loggedin");
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}
