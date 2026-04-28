import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from './context';

const ProtectedRoutes = ({ children }) => {
  const { flag } = useContext(UserContext);


  if (!flag) {
    return <Navigate to="/login" replace />;
  }


  return children;
};

export default ProtectedRoutes;
