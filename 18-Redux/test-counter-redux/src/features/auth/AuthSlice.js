import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authorized: localStorage.getItem('authorized') === 'true'
  },
  reducers: {
    login: (state) => {
      state.authorized = true;
      localStorage.setItem('authorized', true);
    },
    logout: (state) => {
      state.authorized = false;
      localStorage.setItem('authorized', false);
    }
  }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;