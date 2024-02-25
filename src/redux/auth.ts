import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: { token: '' },
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = auth.actions;

export default auth;
