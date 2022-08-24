import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import authSelectors from 'redux/auth/authSelectors';
export default function PrivateRoute({ redirectTo }) {
  const isLoggined = useSelector(authSelectors.getIsLoggined);
  return isLoggined ? <Outlet /> : <Navigate to={redirectTo} />;
}
