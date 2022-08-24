import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
export default function PublicRoute({ restricted = false, redirectTo }) {
  const isLoggined = useSelector(authSelectors.getIsLoggined);
  const shouldRedirect = isLoggined && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
