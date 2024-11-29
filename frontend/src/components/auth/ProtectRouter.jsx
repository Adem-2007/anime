import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectTo }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // If the user is authenticated, redirect to the specified route
  return isAuthenticated ? <Navigate to={redirectTo} /> : children;
};

export default ProtectedRoute;
