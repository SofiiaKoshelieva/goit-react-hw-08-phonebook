import { NavLink } from 'react-router-dom';
import s from '../../components/Phonebook.module.css';
export default function AuthNav() {
  return (
    <div>
      <NavLink className={s.nav_link} to="/register">
        Registration
      </NavLink>
      <NavLink className={s.nav_link} to="/login">
        Login
      </NavLink>
    </div>
  );
}
