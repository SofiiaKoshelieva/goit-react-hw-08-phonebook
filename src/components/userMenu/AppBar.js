import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import s from '../../components/Phonebook.module.css';
export default function AppBar() {
  const isLoggined = useSelector(authSelectors.getIsLoggined);
  console.log(isLoggined);
  return (
    <header className={s.nav}>
      <Navigation />
      {isLoggined ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
