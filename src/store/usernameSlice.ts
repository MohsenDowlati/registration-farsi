import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface UserState {
  username: string;
  isValid: boolean;
  warn1: boolean;
  warn2: boolean;
  warn3: boolean;
}

const initialState: UserState = {
  username: '',
  isValid: false,
  warn1: true,
  warn2: false,
  warn3: false,
};

const USERNAME_REGEX = /^[A-Za-z0-9_]+$/;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      const name = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.username = name;
      // eslint-disable-next-line no-param-reassign
      state.warn2 = name.length >= 3;
      // eslint-disable-next-line no-param-reassign
      state.warn3 = USERNAME_REGEX.test(name);
      // eslint-disable-next-line no-param-reassign
      state.warn1 = !/\s/.test(name);
      // eslint-disable-next-line no-param-reassign
      state.isValid = state.warn1 && state.warn2 && state.warn3;
    },
  },
});

export const { setUsername } = userSlice.actions;

// Selectors:
export const selectIsValidUsername = (s: RootState) => s.username.isValid;
export const selectWarn1 = (s: RootState) => s.username.warn1;
export const selectWarn2 = (s: RootState) => s.username.warn2;
export const selectWarn3 = (s: RootState) => s.username.warn3;
export const selectUsername = (s: RootState) => s.username;

export default userSlice.reducer;
