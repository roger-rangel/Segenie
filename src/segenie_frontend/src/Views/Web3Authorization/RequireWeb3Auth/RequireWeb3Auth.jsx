import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useWeb3Identity from '../../../Hooks/useWeb3Identity';
import PropTypes from 'prop-types';

const RequireWeb3Auth = ({ children }) => {
  const { authToken } = useWeb3Identity();
  const location = useLocation();

  if (!authToken) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <div>{children}</div>;
};

RequireWeb3Auth.propTypes = {
  children: PropTypes.node,
};

export default RequireWeb3Auth;