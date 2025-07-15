import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface PasswordState {
  pass: string;
  passConfirm: string;
  isPassOk: boolean;
  isPassConfirmOK: boolean;
  isVisible: boolean;
  warn1: boolean;
  warn2: boolean;
  warn3: boolean;
  warn4: boolean;
}

const initialState: PasswordState = {
  pass: '',
  passConfirm: '',
  isPassOk: false,
  isPassConfirmOK: false,
  isVisible: false,
  warn1: false,
  warn2: false,
  warn3: false,
  warn4: false,
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const PASSWORD_REGEX_warn3 = /^(?=.*[!@#$%^&*()]).+$/;

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      const pass = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.pass = pass;
      // eslint-disable-next-line no-param-reassign
      state.warn1 = pass.length >= 8;
      // eslint-disable-next-line no-param-reassign,no-multi-assign
      state.warn2 = /[A-Za-z]/.test(pass) && /\d/.test(pass);
      // eslint-disable-next-line no-param-reassign
      state.warn3 = PASSWORD_REGEX_warn3.test(pass);
      // eslint-disable-next-line no-param-reassign
      state.warn4 = !/\s/.test(pass);
      // eslint-disable-next-line no-param-reassign
      state.isPassOk = state.warn1 && state.warn2 && state.warn3 && state.warn4;
      // eslint-disable-next-line no-param-reassign
      state.isPassConfirmOK = state.pass === state.passConfirm && state.isPassOk;
    },
    setPasswordConfirm: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.passConfirm = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.isPassConfirmOK = state.isPassOk && state.passConfirm === state.pass;
    },
    setVisible: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.isVisible = action.payload;
    },
    setIsOkay: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.isPassOk = action.payload;
    },
  },
});

export const { setPassword, setVisible, setPasswordConfirm } = passwordSlice.actions;

export const selectPassword = (s: RootState) => s.password.pass;
export const selectPasswordConfirmation = (s: RootState) => s.password.passConfirm;
export const selectIsPassOK = (state: RootState) => state.password.isPassOk;
export const selectPasswordConfirmOK = (state: RootState) => state.password.isPassConfirmOK;
export const selectIsVisible = (state: RootState) => state.password.isVisible;
export const selectWarn1 = (state: RootState) => state.password.warn1;
export const selectWarn2 = (state: RootState) => state.password.warn2;
export const selectWarn3 = (state: RootState) => state.password.warn3;
export const selectWarn4 = (state: RootState) => state.password.warn4;
export default passwordSlice.reducer;
