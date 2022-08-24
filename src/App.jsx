import Phonebook from './components/Phonebook';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import UserMenu from 'components/userMenu/UserMenu';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AppBar from 'components/userMenu/AppBar';
import authOperations from 'redux/auth/authOperations';
import PrivateRoute from 'components/userMenu/PrivateRoute';
import PublicRoute from 'components/userMenu/PublicRoute';
export const App = store => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Navigate to="login" />}></Route>
        <Route element={<PublicRoute restricted redirectTo="contacts" />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PublicRoute restricted redirectTo="contacts" />}>
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoute redirectTo="login" />}>
          <Route path="/contacts" element={<Phonebook store={store} />} />
        </Route>
      </Routes>
    </div>
  );
};
{
  /* <Route exact path="/" element={} /> */
}
{
  /* <Route path="/register" element={} /> */
}
{
  /* <Route exact path="/login" element={} /> */
}
{
  /* <Route path="/contacts" element={} /> */
}
