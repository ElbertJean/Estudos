import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/CounterSlice';
import authSlice from './auth/AuthSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice
  },
});

export default store;
