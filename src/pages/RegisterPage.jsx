import { useState } from 'react';

import { useDispatch } from 'react-redux';
import s from '../components/Phonebook.module.css';
import authOperations from '../redux/auth/authOperations';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div>
      <div>
        <h1 className={s.register_title}>Register</h1>
        <form
          className={s.register_case}
          onSubmit={hundleSubmit}
          autoComplete="off"
        >
          <input
            className={s.register_input}
            type="text"
            value={name}
            placeholder="name"
            onChange={handleChange}
            name="name"
            label="name"
          />
          <input
            className={s.register_input}
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
            name="email"
            label="email"
          />

          <input
            className={s.register_input}
            placeholder="password"
            type="password"
            value={password}
            name="password"
            label="password"
            onChange={handleChange}
          />
          <button type="submit" variant="contained">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
