import { useSelector, useDispatch } from 'react-redux';

import authSelectors from '../../redux/auth/authSelectors';

import authOperations from '../../redux/auth/authOperations';
import s from '../../components/Phonebook.module.css';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <span className={s.welcome}>Welcome, {name}</span>
      <button
        type="button"
        variant="outlined"
        className={s.button_logout}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
}
