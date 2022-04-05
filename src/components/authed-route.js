
import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'

const AuthedRoute = () => {
  const user = useSelector((state) => state.user)
  let location = useLocation();
    if(!user.authenticate) {
        return <Navigate to="/signin" state={{ from: location }} />;
    }
    return <Outlet />
};

export default AuthedRoute;