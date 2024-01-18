import React from 'react';
import { Navigate, Routes } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
   const isLoggedIn = Object.keys(sessionStorage).length > 0;

   if (!isLoggedIn) {
      return <Navigate to="/login" />;
   }

   return element;
};

export default ProtectedRoute;
