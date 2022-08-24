import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogined: false,
};
const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogined = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogined = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogined = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };

      state.isLogined = true;
    },
  },
});
export default authSlise.reducer;
