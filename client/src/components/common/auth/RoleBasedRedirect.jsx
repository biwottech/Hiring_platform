import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";


const RoleBasedRedirect = () => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  switch (user?.role) {
    case "admin":
      return <Navigate to="/admin/dashboard" replace />;
    case "jobseeker":
      return <Navigate to="/jobseeker/dashboard" replace />;
    case "recruiter":
      return <Navigate to="/recruiter/dashboard" replace />;
    default:
      return <Navigate to="/" replace />;
  }
};

export default RoleBasedRedirect;
