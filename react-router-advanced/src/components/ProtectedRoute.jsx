import React from "react";
import { Navigate } from "react-router-dom";

// Simple authentication hook (simulated)
function useAuth() {
  const user = localStorage.getItem("user");
  return { user };
}

// ProtectedRoute component
function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // If user is not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child component
  return children;
}

export default ProtectedRoute;

