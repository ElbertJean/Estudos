import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authorized } = useSelector((state) => state.auth);

  return authorized ? <Component {...rest} /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
