import { useState } from 'react';

import { useDispatch } from 'react-redux';
import s from '../components/Phonebook.module.css';
import authOperations from '../redux/auth/authOperations';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const hundleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  const inspectInpusts = () => {
    if (email.trim() === '' || password.trim() === '') return true;
  };

  return (
    <div>
      <div>
        <h1 className={s.login_title}>Login</h1>
        <form
          className={s.register_case}
          onSubmit={hundleSubmit}
          autoComplete="off"
        >
          <input
            className={s.register_input}
            type="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
            name="email"
            label="email"
          />
          <input
            className={s.register_input}
            type="password"
            placeholder="password"
            value={password}
            name="password"
            label="password"
            onChange={handleChange}
          />
          <button disabled={inspectInpusts()} type="submit" variant="contained">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
