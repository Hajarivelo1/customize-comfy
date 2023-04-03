import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import { useUserContext } from '../context/user_context';

const PrivateRoutes = () => {
  const { user } = useAuth0();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes;
