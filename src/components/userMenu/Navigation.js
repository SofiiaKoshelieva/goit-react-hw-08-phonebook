import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
const Navigation = () => {
  const isLoggined = useSelector(authSelectors.getIsLoggined);
  return <nav>{isLoggined && <NavLink to="/contacts">Contacts</NavLink>}</nav>;
};
export default Navigation;
